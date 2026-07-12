---
title: "The AI writing-detection arms race: where it stands in mid-2026"
description: "Human readers spot AI text barely better than chance, and detection software flags honest students at double-digit rates."
date: 2026-07-12T09:45:00+01:00
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["academic-integrity", "genai", "ai-detection"]
source_url: "https://www.nature.com/articles/d41586-026-01358-2"
source_name: "Nature"
faq:
  - q: "How accurate are AI-writing detectors like GPTZero, Turnitin and Copyleaks?"
    a: >-
      Inconsistently, and less accurate than their marketing suggests. GPTZero
      advertises a false positive rate under one per cent, but a peer-reviewed
      2023 study across 32 university courses at NYU Abu Dhabi found an 18 per
      cent false positive rate and a 32 per cent false negative rate on real
      student writing. A separate Nature-reported study put GPTZero's false
      positive rate on human essays at around 16 per cent.
  - q: "Do AI detectors discriminate against non-native English speakers?"
    a: >-
      Yes, according to a 2023 Stanford study in the journal Patterns. Testing
      seven detectors including GPTZero on TOEFL essays, researchers found an
      average of 61 per cent of non-native English speakers' essays were
      flagged as AI-generated, against a rate close to zero for native-English
      essays from US students.
  - q: "Can humans reliably tell AI-written text from human writing?"
    a: >-
      Not much better than a machine can. In forensic linguist Claire
      Hardaker's Bot or Not test, most people correctly identify roughly nine
      of fifteen short passages, sixty per cent, barely better than a coin
      toss.
  - q: "Do proctored, in-person exams work better than AI detection software?"
    a: >-
      In one documented case, dramatically so, though not without a real
      cost. A Brown University economics class averaged 96 out of 100 on a
      take-home midterm and 48.6 out of 100 once the final was moved into a
      proctored room. The swing does not identify who used AI, but it shows a
      format change can reveal more than a detection score, at the price of
      reviving accessibility and scale problems proctoring has always had.
  - q: "What happens to students wrongly flagged by AI detectors?"
    a: >-
      Real academic consequences, sometimes before the detection method
      itself is properly weighed. Idaho State chemistry student Lauren Jager
      had her personal statement flagged and rewrote it to look deliberately
      less polished. A Yale School of Management student was suspended for a
      year after a GPTZero flag on his exam and is still pursuing legal
      action against the university.
---

![The AI writing-detection arms race: where it stands in mid-2026](/images/hero/2026-07-12-ai-writing-detection-arms-race-mid-2026.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>GPTZero advertises a false positive rate under one per cent, but independent peer-reviewed testing has repeatedly found double-digit false positive rates on real student writing: 18 per cent in a 2023 NYU Abu Dhabi study, around 16 per cent in a study reported by Nature.</li>
<li>A 2023 Stanford study found detectors including GPTZero flagged an average of 61 per cent of non-native English speakers' essays as AI-generated, against close to zero for native-English essays, a bias that lands hardest on students least equipped to fight a false accusation.</li>
<li>Humans do not do much better: in Claire Hardaker's Bot or Not test, people identify AI-written passages correctly about sixty per cent of the time, barely above chance.</li>
<li>A Brown University class that moved its final exam into a proctored room saw its average collapse from 96 to 48.6 out of 100, a blunter but less ambiguous signal than any detection score, achieved at the cost of reviving the accessibility and scale problems proctoring has always carried.</li>
<li>Real students have already paid for the gap between detector marketing and detector accuracy, including a Yale School of Management student suspended for a year and still in litigation over a GPTZero flag.</li>
</ul></div>

An AI-detection tool that advertises a false positive rate under one per cent returned 18 per cent when a peer-reviewed study ran it against real student writing at NYU Abu Dhabi. That seventeen-point gap between the marketing claim and the measured result is [the detection arms race](https://www.nature.com/articles/d41586-026-01358-2) in miniature: a technology sold as a solved problem, tested by people with no stake in the sale, and found wanting in ways that land on real students. [Two posts published on this site this week](/blog/2026-07-12-is-gptzero-accurate-100000-text-study/) traced that gap in detail; this piece steps back to ask what the wider pattern, across a year of stories on this site, actually adds up to.

The pattern starts, in a sense, before machines entered the picture at all. Humans are not reliable detectors either. In forensic linguist Claire Hardaker's [Bot or Not](https://www.theguardian.com/books/ng-interactive/2026/jul/04/future-of-fiction-next-great-novel-ai-language-chat-gpt) test, [covered here in July](/blog/2026-07-06-can-readers-tell-human-writing-from-ai-anymore/), ordinary readers correctly identify AI-written passages roughly sixty per cent of the time, barely better than a coin toss. That baseline matters, because it is tempting to treat software detection as a harder, more rigorous version of the same judgement a careful reader could make. The honest starting point is that neither humans nor software are currently good at this task, and the two failures are not symmetrical in their consequences.

Software detection fails in a specific direction: toward flagging honest work. [A Nature-reported study covered on this site in July](/blog/2026-07-08-ai-detection-tools-flag-honest-students-at-scale/) found GPTZero misclassified roughly 16 per cent of human-written essays as machine-generated. Idaho State chemistry student Lauren Jager was one of the people behind that statistic: her personal statement was flagged despite her not using any AI tool, and she rewrote it to look deliberately less polished to avoid further suspicion. A [closer look at the peer-reviewed research](/blog/2026-07-12-is-gptzero-accurate-100000-text-study/) behind [Ryne AI's headline claim of running 100,000 texts through GPTZero](https://ryne.ai/blog/why-gptzero-is-not-reliable-anymore-we-ran-100000-texts-to-prove-it) found the same failure at similar scale from a different angle: a 2023 study across 32 NYU Abu Dhabi courses put GPTZero's false positive rate at 18 per cent and its false negative rate, missing text that genuinely was AI-generated, at 32 per cent. Run the AI text through a paraphrasing tool first, and the false negative rate climbed to 95 per cent. Detectors, in other words, are simultaneously too quick to accuse the innocent and too easy to fool.

That failure is not evenly distributed. A 2023 Stanford study in the journal Patterns tested seven detectors, GPTZero among them, on TOEFL essays written by non-native English speakers against comparable essays from native-speaking US students. The detectors flagged an average of 61 per cent of the non-native essays as AI-generated. The equivalent figure for the native-English essays was close to zero. Only two of ninety-one TOEFL essays in the study escaped being flagged by at least one detector. This is the fairness problem underneath the accuracy problem: a tool that is wrong 16 to 18 per cent of the time on average is wrong far more often, and far more consequentially, for the students already least positioned to argue their way out of an accusation.

The costs of those errors are not hypothetical. A Yale School of Management student was referred to the university's Honor Committee after a GPTZero flag on an unusually long, carefully formatted exam. He denied using AI and submitted GPTZero scans of writing by Yale's own faculty, including a former university president, to demonstrate that the tool flagged their prose too. The committee suspended him for a year regardless, on a charge of not being fully forthcoming during the investigation rather than the AI-use allegation itself. He sued Yale in February 2025; a federal judge declined to order his reinstatement that May, and the case has continued since.

Against that backdrop, one of the more striking recent developments has nothing to do with software at all. [Brown University economist Roberto Serrano](https://arstechnica.com/ai/2026/07/we-cannot-choose-to-become-idiots-the-ai-cheating-scandal-roiling-brown-university/) allowed take-home exams for both the midterm and final of his spring 2026 course, a decision made after a shooting on Brown's campus left him wanting to give strained students some flexibility. The take-home midterm produced a class average of 96 out of 100, well above his course's historical range of 65 to 80 per cent. Suspicious of results that good, Serrano moved the final into a proctored room. Eighteen of the eighty-six enrolled students dropped the course before sitting it, and among those who sat both exams, the average collapsed to 48.6. No detection software was involved, and no individual student has been accused. The swing itself, at that scale, was the evidence, and it did a job neither Hardaker's readers nor GPTZero managed: it revealed something true about a whole class's preparation without pretending to know which student did what.

That contrast is worth sitting with rather than resolving too neatly. A proctored room does not diagnose anything about an individual, which is exactly what makes it fairer than a detection score in one sense: nobody is accused on the strength of a single number. But moving assessment back into an exam hall reintroduces the older unfairnesses proctoring has always carried, harder access for students who rely on extended time or quiet rooms, a single high-stakes sitting for anyone who is ill or has a bad morning, and a logistics problem that scales badly once a lecture course runs into the hundreds rather than the dozens. Brown's numbers are a strong argument that take-home assessment, in a course of that size, was no longer measuring what it was designed to measure. They are not an argument that abandoning take-home assessment everywhere comes free.

Put together, the honest state of the detection arms race in mid-2026 is this: nobody, human or machine, reliably tells AI writing from human writing at the level universities are treating detection scores as evidence. Software detectors chase a moving target as generation improves, and the errors they make fall disproportionately on students who already write differently from the training data's assumption of a native English speaker. Structural fixes like proctoring work better as a blunt aggregate signal than any detector works as an individual one, but they carry real costs of their own, and they do nothing to address why students turn to AI writing tools in the first place. What has not changed across every story in this cluster is the direction of the risk: an honest student is more likely to be caught in the net than a dishonest one is to escape it clean, and until that changes, no institution leaning on a single tool, human or software, is standing on solid ground.
