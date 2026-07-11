---
title: "safe-crontab: the guarded crontab installer we wish we'd had"
description: "We are releasing safe-crontab, an open-source guarded crontab installer built after a near miss wiped out a working schedule in one command."
date: 2026-07-11T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes", "open-source"]
faq:
  - q: "What actually happened in the incident that led to safe-crontab?"
    a: >-
      An automated agent needed to add a couple of lines to a crontab, so it
      wrote a small file containing just those new lines and ran `crontab`
      on it directly, without first seeding the file from the existing
      schedule with `crontab -l`. Plain `crontab` replaces the whole
      schedule in one go, so instead of adding two lines it deleted
      everything: 363 lines of previously scheduled jobs, gone in a single
      command, with no warning and no backup taken by `crontab` itself.
  - q: "How was the wiped crontab recovered?"
    a: >-
      From an independent backup that happened to exist for unrelated
      reasons. Nothing was lost in the end, but the recovery was luck, not
      design, and that is exactly the gap safe-crontab was built to close.
  - q: "What does safe-crontab do differently from plain crontab?"
    a: >-
      It wraps the same install with five steps: it locks the operation so
      two installs cannot race each other, backs up the current crontab
      before touching anything, refuses the install if the new file is
      suspiciously smaller than the old one unless that is explicitly
      overridden, runs a syntax check where the local crontab supports one,
      and then installs and does a best-effort readback check.
  - q: "Is the final verification step a guarantee that the install worked?"
    a: >-
      No, and we would rather say that plainly than oversell it. Some
      crontab implementations rewrite whitespace or comments on save, so a
      hash mismatch on readback is only ever logged as a warning, and a
      match is never treated as proof either. Anyone who needs certainty
      should run `crontab -l` themselves after safe-crontab finishes.
---

![safe-crontab: the guarded crontab installer we wish we'd had](/images/hero/2026-07-11-safe-crontab-launch.png)

We are releasing a small tool called safe-crontab, a guarded, drop-in replacement for `crontab <file>`. It is open source under the MIT licence, written by Zak Fielding, and the code is now up at [github.com/zaktrue/safe-crontab](https://github.com/zaktrue/safe-crontab).

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>safe-crontab wraps a crontab install with a lock, a timestamped backup, a shrink guard, an optional syntax check and a best-effort readback verification.</li>
<li>It was built after an automated agent replaced an entire 363-line crontab with two new lines in a single unseeded install, with no warning and no backup taken.</li>
<li>The shrink guard, the check that would have caught that specific incident, refuses an install when the new file has far fewer lines than the current one, unless the caller passes `--force-shrink`.</li>
<li>The final verification step is advisory only: a hash mismatch on readback is logged as a warning, not treated as a failure, because some crontab implementations rewrite whitespace on save.</li>
<li>It is a Linux-first tool built against a GNU userland and has not been tested on macOS or the BSDs.</li>
<li>It is released under the MIT licence at github.com/zaktrue/safe-crontab.</li>
</ul></div>

Plain `crontab <file>` has no guard rails at all. It replaces the entire schedule in one shot, takes no backup, and gives no warning if the new file happens to be far smaller than the one it is about to overwrite. We know that because it happened to us.

An automated agent needed to add a couple of lines to a crontab. It wrote a small file containing just those new lines and ran `crontab` on it, without first pulling the existing schedule down with `crontab -l` and adding to that. Since plain `crontab` does not add, it replaces, the result was not two extra lines, it was every previously scheduled job gone at once: 363 lines, deleted in a single command, with no confirmation prompt and no backup taken by `crontab` itself. We recovered everything from an independent backup that happened to exist for unrelated reasons, so nothing was actually lost. But that recovery was luck, not anything the tooling had actually guaranteed, and the incident should never have been possible in the first place.

safe-crontab is what we built the next day, with one aim: make that specific mistake, and the general shape of mistake it belongs to, get refused before it happens rather than tidied up after. Running `safe-crontab <file>` performs five steps in order. It locks the whole operation with `flock` so two installs cannot race each other. It backs up the current live crontab to a timestamped file before anything else happens. It checks the new file against a shrink guard: if it has far fewer lines than a configurable share of the current crontab, the install is refused outright, unless `--force-shrink` is passed for a genuinely deliberate large removal. Where the local `crontab` supports a dry-run flag, it checks the new file's syntax before installing anything. Finally it installs the file and reads it back for a best-effort comparison against the source.

That last step is worth being honest about, because it is easy to oversell. The readback comparison is advisory, not a guarantee. Some crontab implementations quietly rewrite whitespace, blank lines or comments when they store a schedule, so a correct install can still produce a hash that does not quite match the source file, and treating that as a failure would just produce false alarms. A mismatch is logged as a warning; a match is never treated as proof either. Anyone who needs real certainty should run `crontab -l` themselves once safe-crontab finishes. We would rather say that plainly than claim a level of assurance the tool cannot actually back up.

The tool is Linux-first, built and tested against a GNU userland: it needs `bash`, `flock`, `sha256sum` and GNU `xargs`. It has not been tested on macOS or the BSDs, which lack some of those by default, so treat it as untested there rather than assume it will just work.

safe-crontab is for anyone letting automation, a script, or an agent touch crontab unattended, which is exactly the situation that caused our incident: a human can be careful once and distracted the next time, but a script has no notion of caution beyond whatever is actually enforced in the code path it calls. It is just as useful for a person editing a crontab by hand who would rather have a backup taken automatically than remember to take one. We are not claiming it will stop every possible mistake. We are saying it refuses the one specific shape of mistake that nearly cost us a working schedule, and we would rather ship something honest about its limits than something that overpromises. It is free, it is MIT licensed, and we would be glad to see it get some use.
