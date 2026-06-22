/* MUEC editor & reviewer template library.
   These are ORIGINAL, adaptable examples — not prescriptive standards and not copied from any journal.
   They are informed by COPE and ICMJE good-practice guidance and the ACT 24(4) special issue on
   the ethics of authorship, reviewership, and editorship. Adapt tone and detail to your journal.
   Members are invited to contribute and improve these via muec@groups.io.
   Placeholders are in [brackets]. */
window.MUEC_TEMPLATES = [
 {group:"Desk decisions", title:"Desk reject — out of scope",
  when:"A sound manuscript that simply does not fit the journal's aims and scope.",
  body:`Dear [Author],

Thank you for submitting "[Title]" to [Journal]. I have read it with interest. After consideration, I have decided not to send it out for review, because its focus falls outside the journal's aims and scope: [one sentence on the specific mismatch].

This is not a judgement on the quality of the work, and I hope you will find a more suitable home for it quickly. You may wish to consider [1–2 better-fitting journals]. I wish you every success with it.

With best wishes,
[Editor], [Journal]`},

 {group:"Desk decisions", title:"Desk reject — insufficient contribution / fit",
  when:"In scope, but the contribution is too limited or preliminary for the journal.",
  body:`Dear [Author],

Thank you for submitting "[Title]" to [Journal]. I appreciate the work behind it. After careful reading, I have decided not to proceed to external review. While the topic is relevant to our readers, the manuscript in its current form does not yet make a sufficiently distinct contribution to [the literature / theory / practice], because [specific reason].

I recognise this is disappointing. Should you develop the work substantially — for example, [concrete suggestion] — you would be welcome to submit it as a new manuscript, though I cannot predict the outcome of review.

With best wishes,
[Editor], [Journal]`},

 {group:"Reviewer communications", title:"Reviewer invitation",
  when:"Inviting a potential reviewer.",
  body:`Dear [Reviewer],

I am writing to invite you to review a manuscript submitted to [Journal], titled "[Title]". Your expertise in [area] would make your assessment especially valuable. The abstract is below; the full manuscript and review form are accessible via [link/system].

Would you be able to return your review by [date, ~X weeks]? If you are unavailable, I would be grateful for any suggestions of alternative reviewers. Please also let me know of any conflict of interest that might affect your assessment.

Thank you for considering this — peer review is a service the whole field depends on.

With thanks,
[Editor], [Journal]

Abstract: [paste]`},

 {group:"Reviewer communications", title:"Reviewer reminder (gentle)",
  when:"A review is approaching or just past its due date.",
  body:`Dear [Reviewer],

Thank you again for agreeing to review "[Title]" for [Journal]. This is a friendly reminder that your review was due on [date]. We know how full academic schedules are, and a few days' grace is no problem.

If you are able to submit within the next [week], that would keep the process on track for the authors. If circumstances have changed and you can no longer complete it, please just let me know so I can arrange cover. The review form is here: [link].

With appreciation,
[Editor], [Journal]`},

 {group:"Reviewer communications", title:"Reviewer thank-you",
  when:"After a review is submitted.",
  body:`Dear [Reviewer],

Thank you for your thoughtful review of "[Title]". Your comments were [specific, constructive, generous] and will genuinely help the authors strengthen the work. The time and care you gave it are exactly what keeps our review process rigorous and humane.

I hope I may call on you again. With thanks once more,
[Editor], [Journal]`},

 {group:"Decision letters", title:"Decision — major revisions",
  when:"Promising work that needs substantial revision.",
  body:`Dear [Author],

Thank you for submitting "[Title]" to [Journal]. The reviews are now complete and appended below. The reviewers and I see real value in this work, and I invite you to submit a major revision that responds to their comments.

The most important points to address are: [2–4 key items]. Please accompany your revision with a point-by-point response indicating how you have handled each comment (and your reasoning where you disagree). An invitation to revise does not guarantee acceptance; the revised manuscript may be returned to the reviewers.

Please submit by [date]. I look forward to seeing the next version.

With best wishes,
[Editor], [Journal]`},

 {group:"Decision letters", title:"Decision — reject after review",
  when:"Declining after external review.",
  body:`Dear [Author],

Thank you for submitting "[Title]" to [Journal], and for your patience during review. I am sorry to tell you that I am unable to accept the manuscript for publication. The reviews are appended in full.

The principal reasons are [1–3 substantive points], which in the reviewers' assessment and my own would require changes beyond the scope of a revision. I hope the comments are useful as you take the work forward, and I would encourage you to do so — the underlying [question / dataset / idea] is worthwhile.

With genuine thanks for considering [Journal], and best wishes for the work's future,
[Editor], [Journal]`},

 {group:"Integrity & AI", title:"Query to author — undisclosed AI use",
  when:"Signs of generative-AI involvement that was not disclosed.",
  body:`Dear [Author],

Thank you for your submission "[Title]". As part of our standard checks I would like to ask a routine question about the preparation of the manuscript.

Our policy, in line with COPE and ICMJE guidance, is that generative-AI tools cannot be listed as authors, and that any use of such tools (for drafting, editing, translation, code, image or data work) must be disclosed, with the authors taking full responsibility for the content. Could you please confirm whether any generative-AI tools were used in preparing this manuscript, and if so, describe which tools and how they were used, so we can ensure the appropriate disclosure is recorded?

This is a routine inquiry and not an accusation. I would be grateful for your confirmation before we proceed.

With best wishes,
[Editor], [Journal]`},

 {group:"Integrity & AI", title:"Query to author — citation problems",
  when:"References that appear inaccurate, unverifiable, or possibly fabricated.",
  body:`Dear [Author],

Thank you for your submission "[Title]". In checking the manuscript we were unable to verify several of the references, which appear to contain inaccuracies or do not correspond to a locatable source: [list the specific references].

Accurate citation is essential to the scholarly record, and we ask all authors to confirm that every reference is genuine, correctly cited, and actually consulted. Could you please review these items, supply corrected details or DOIs/links where available, and confirm the accuracy of the full reference list? If any citation cannot be verified, please remove it and adjust the text accordingly.

We can continue once this is resolved. Thank you for your attention to it.

With best wishes,
[Editor], [Journal]`},

 {group:"Reviewer guidance", title:"Structured review template (for reviewers)",
  when:"Share with reviewers as a scaffold for a fair, useful, humane review.",
  body:`Manuscript: [Title]    Reviewer: [name/anonymous]    Date: [ ]

1. Summary (2–3 sentences, in your own words): what the paper claims and does. This shows the authors you have understood it.

2. Contribution & fit: Is the question significant and the contribution clear? Does it suit this journal's scope and readership?

3. Strengths: what works well and should be preserved.

4. Key issues (essential): the most important problems, ordered by priority — theory/framing, methods/analysis, evidence for claims, ethics, clarity. Be specific and point to sections.

5. Minor issues: smaller matters (clarity, references, figures, typos).

6. Integrity check: any concerns about originality, citation accuracy, undisclosed AI, data availability, or ethics? (Raise privately with the editor if serious.)

7. Recommendation: accept / minor revision / major revision / reject — and a sentence on why.

Tone: write the review you would want to receive — candid, constructive, and respectful. Critique the work, not the author.`},

 {group:"Reviewer communications", title:"Declining gracefully (reviewer → editor)",
  when:"A model an editor can share, or a reviewer can adapt, for declining an invitation well.",
  body:`Dear [Editor],

Thank you for the invitation to review "[Title]" for [Journal]. Regrettably I am unable to take it on at this time, due to [workload / timing / a possible conflict of interest with the authors]. I did not want to delay you with a slow reply.

If helpful, you might approach [1–2 suggested reviewers with relevant expertise]. I would be glad to be considered for future manuscripts.

With apologies and best wishes,
[Reviewer]`}
];
