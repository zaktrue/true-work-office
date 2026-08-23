---
title: "Google Allows Users to Remove Visible AI Watermarks From Generated Media"
description: "Google introduced a setting to disable visible sparkle watermarks on Gemini media while keeping embedded SynthID markers."
date: 2026-08-23T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "ai-industry"]
source_url: "https://www.theverge.com/tech/980416/google-gemini-ai-watermarks-removal"
source_name: "The Verge"
structure: "policy_breakdown"
faq:
  - q: "Does disabling the visible watermark remove all AI identification from the media?"
    a: >-
      No, generated files retain invisible SynthID markers and C2PA metadata
      that allow software tools to detect AI origin.
  - q: "How does this change affect media verification in education?"
    a: >-
      Educators can no longer rely on visual cues like sparkle icons to spot
      synthetic media, requiring technical metadata checks instead.
---

![Google Allows Users to Remove Visible AI Watermarks From Generated Media](/images/hero/2026-08-18-google-allows-users-to-remove-visible-ai-watermarks-from-gen.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Google added a setting to disable visible sparkle watermarks on images, videos, and music created with Gemini and Flow.</li>
<li>Invisible SynthID markers and C2PA metadata remain embedded in generated files to enable automated provenance checks.</li>
<li>Educational institutions must rely on technical inspection tools rather than visual icons to verify synthetic media.</li>
<li>The optional watermark feature will be excluded from regions where visible AI labelling is required by law.</li>
</ul></div>

Google has updated its AI media tools to let users turn off visible watermarks on generated images, videos, and music. The new Media Watermark setting works across Gemini and Google’s Flow video generator. Disabling it removes the sparkle icon in the bottom corner of content created with Google’s Nano Banana and Omni models. In [The Verge’s reporting on Google’s watermark setting](https://www.theverge.com/tech/980416/google-gemini-ai-watermarks-removal), Josh Woodward, a Google vice-president overseeing Labs, Gemini, and AI Studio, explained that files will still carry invisible SynthID tracking and C2PA metadata.

Verification now relies on backend metadata instead of visual cues. Dropping visible icons makes quick spot-checks harder, though editing software already made it easy to crop or scrub them out. Google says people can verify if media came from its tools by asking Gemini or Search, both of which read the underlying SynthID and metadata. This move brings Google into line with OpenAI, Meta, and Anthropic, which use invisible standards or internal labels instead of visible icons. Google plans to bring the setting to Search eventually, but will keep it off in areas where visible labels are legally required.

This change shifts provenance checks away from human eyes and onto technical tools. Academic institutions can no longer rely on quick visual checks to spot synthetic media in assignments or course materials. Instead, staff and universities must use platform inspection tools and embedded metadata. It underlines why teaching students clear citation habits matters more than relying on visual watermarks to protect work.

Whether this works in the long run comes down to how well detection queries and metadata filters cope across third-party platforms. It is not yet clear how accurately Search and Gemini handle files that have been compressed or re-encoded. Future regulation will show whether rules in certain regions force visible labels back on everywhere or simply split policies by location.
