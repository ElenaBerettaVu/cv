/*
 * Edit the contents of the website here.
 * Publications and institutional affiliation have been checked against the
 * VU Amsterdam research portal (October 2026). Editorial explainers are
 * clearly flagged as drafts to review before publication.
 */
window.SITE_DATA = {
  identity: {
    name: 'Elena Beretta',
    role: 'Assistant Professor · Artificial Intelligence',
    institution: 'Vrije Universiteit Amsterdam',
    email: 'elena.beretta@vu.nl',
    orcid: 'https://orcid.org/0000-0002-6090-2765',
    vu: 'https://research.vu.nl/en/persons/elena-beretta/',
    course: 'https://studiegids.vu.nl/en/courses/2026-2027/XB_0143'
  },
  topics: [
    {number:'01',slug:'human-ai-interaction',title:'Can we trust what AI tells us?',text:'How explanations, interaction design and context shape trust, judgment and the decisions people make.',tag:'Human–AI interaction',image:'art-trust.svg',color:'violet'},
    {number:'02',slug:'evidence-bias',title:'What happens to missing evidence?',text:'How missing or selectively captured information changes what can be inferred from a decision process.',tag:'Evidence & bias',image:'art-missing.svg',color:'coral'},
    {number:'03',slug:'fairer-systems',title:'How can AI support fairer decisions?',text:'From representation and social bias to more accountable, inclusive systems.',tag:'Responsible AI',image:'art-fairness.svg',color:'mint'}
  ],
  papers: [
    {id:'ethics-ux',year:2026,type:'Human–AI interaction',title:'Ethics-in-practice in UX Design: An Empirical Study of an AI-Based Conversational Support Tool',authors:'Elena Beretta & Xiaotang Wei',venue:'ACM FAccT 2026',url:'https://doi.org/10.1145/3805689.3812474',summary:'A study comparing conversational and static guidance for practical UX ethics decisions.',unpacked:'ethics-tools-in-practice'},
    {id:'vision-transformers',year:2025,type:'Bias & representation',title:'Social Bias in Vision Transformers: A Comparative Study Across Architectures and Learning Paradigms',authors:'Takehiro Tsurumi & Elena Beretta',venue:'ACM FAccT 2025',url:'https://doi.org/10.1145/3715275.3732189',summary:'How social biases manifest across different vision transformer architectures and learning approaches.',unpacked:'the-bias-behind-the-image'},
    {id:'decoding-faces',year:2024,type:'Bias & representation',title:'Decoding faces: Misalignments of gender identification in automated systems',authors:'Elena Beretta, Cristina Voto & Elena Rozera',venue:'Journal of Responsible Technology',url:'https://doi.org/10.1016/j.jrt.2024.100089',summary:'A study of automated gender recognition, identity and the experience of misgendering.',unpacked:'can-a-machine-read-gender'},
    {id:'gender-in-pixels',year:2024,type:'Bias & representation',title:'Gender in Pixels: Pathways to Non-binary Representation in Computer Vision',authors:'Elena Beretta',venue:'AAAI/ACM AIES 2024',url:'https://doi.org/10.1609/aies.v7i1.31622',summary:'A review of how computer vision research addresses—or overlooks—non-binary gender representation.',unpacked:'can-a-machine-read-gender'},
    {id:'bayesian-fairness',year:2021,type:'Responsible AI',title:'Detecting discriminatory risk through data annotation based on Bayesian inferences',authors:'Elena Beretta, Andrea Vetrò, Bruno Lepri & Juan Carlos De Martin',venue:'ACM FAccT 2021',url:'https://research.vu.nl/en/publications/detecting-discriminatory-risk-through-data-annotation-based-on-ba/',summary:'An approach to identifying discriminatory risks in annotated datasets.'}
  ],
  articles: [
    {
      slug:'ai-explanation-illusion',
      title:'The AI explanation illusion',
      teaser:'Why an explanation can sound convincing without giving us the whole story.',
      category:'Human–AI interaction',
      status:'Editorial concept · draft',
      read:'5 min read',
      image:'hand-collage.webp',
      feature:true,
      intro:'We are very good at mistaking a plausible story for a reliable explanation. When the storyteller is an AI system, that confusion can be especially persuasive.',
      paragraphs:[
        {heading:'An explanation is not the same as evidence',text:'Imagine a system recommends one decision over another and supplies an elegant, confident explanation. The words make sense. The logic sounds coherent. But did the explanation accurately describe how that decision was reached? Those are different questions.'},
        {heading:'The missing question',text:'A useful explanation should help us understand not only what a system says, but what it actually relied on, what it left out and where uncertainty remains. Fluent language on its own does not answer any of those questions.'},
        {heading:'Why this matters',text:'In consequential settings, an explanation can become a reason to defer judgment. The goal is not simply to produce explanations that people like; it is to support decisions that people can meaningfully interrogate, challenge and revise.'},
        {heading:'A better starting point',text:'Next time an explanation feels convincing, ask: What evidence would change this answer? What do we not know? And who gets to challenge the system’s reasoning?'}
      ],
      footnote:'Editorial concept for this website; not presented as a summary of one specific published paper.'
    },
    {
      slug:'can-a-machine-read-gender',
      title:'Can a machine read gender from a face?',
      teaser:'What facial analysis gets wrong when a complex identity becomes a binary label.',
      category:'Bias & representation',
      status:'Explainer draft · linked to research',
      read:'6 min read',
      image:'art-gateway.svg',
      intro:'A face is an image. Gender is not simply an image classification problem. Yet automated systems have often treated it as one.',
      paragraphs:[
        {heading:'Start with the assumption',text:'Many gender-recognition systems are trained to sort facial images into two categories. That technical choice can look neutral until we ask a more basic question: who decided those categories adequately describe people?'},
        {heading:'What the research examines',text:'In “Decoding faces”, we investigated how automatic gender recognition relates to gender identity, expression and the experience of being misgendered. In “Gender in Pixels”, I reviewed research on gender bias in computer vision, paying particular attention to non-binary representation.'},
        {heading:'The wider lesson',text:'A model can be highly accurate against its own labels while still reproducing a flawed understanding of the world. Evaluating fairness means examining not only model errors but also the assumptions inside the task itself.'},
        {heading:'What could change?',text:'More inclusive research needs to question default categories, consider the people affected by a system and connect technical design with perspectives from the social sciences and gender studies.'}
      ],
      linkedPapers:['decoding-faces','gender-in-pixels']
    },
    {
      slug:'the-bias-behind-the-image',
      title:'The bias behind the image',
      teaser:'Why changing an AI model’s architecture does not automatically remove its social stereotypes.',
      category:'Bias & representation',
      status:'Explainer draft · linked to research',
      read:'7 min read',
      image:'art-flow.svg',
      intro:'Today’s image models can recognise patterns with remarkable sophistication. But what else do they learn along the way?',
      paragraphs:[
        {heading:'A model learns associations',text:'An image model does not only learn to recognise objects. Training data and learning objectives can also leave it with associations involving social categories, occupations and value judgments.'},
        {heading:'Not all architectures behave alike',text:'Our FAccT 2025 work compares social biases across vision transformers trained under different learning paradigms. The study found that bias can emerge differently in feature representations and decision-making layers depending on how a model learns.'},
        {heading:'The practical implication',text:'Choosing a new model family is not enough to guarantee a fairer outcome. Bias audits need to consider the data, the architecture, the learning setup and the context in which the model will be used.'},
        {heading:'A question to keep asking',text:'When we say a model performs “better”, better at what—and better for whom?'}
      ],
      linkedPapers:['vision-transformers']
    },
    {
      slug:'ethics-tools-in-practice',
      title:'Can a chatbot help designers make ethical decisions?',
      teaser:'Why ethics guidance has to work inside real design processes, not only on paper.',
      category:'Human–AI interaction',
      status:'Explainer draft · linked to research',
      read:'5 min read',
      image:'art-planet.svg',
      intro:'Ethical design principles are easy to agree with. Applying them under deadlines, ambiguity and competing constraints is harder.',
      paragraphs:[
        {heading:'The problem with a static checklist',text:'UX designers confront questions about privacy, transparency, manipulation and accessibility while building products. Principles can be difficult to translate into concrete decisions in the middle of a fast-moving workflow.'},
        {heading:'What we compared',text:'In our FAccT 2026 study, we compared a conversational ethics-support tool with a static guideline built from equivalent information. Participants judged the agent more practical and actionable, while differences in other dimensions were smaller.'},
        {heading:'A useful tool, not a moral authority',text:'The study also surfaced limitations around source transparency and the framing of stakeholder perspectives. A conversational system can support deliberation, but it cannot substitute for it.'},
        {heading:'What to take away',text:'Useful AI ethics tools should help people ask better questions and justify choices, not outsource responsibility.'}
      ],
      linkedPapers:['ethics-ux']
    },
    {
      slug:'the-hidden-cost-of-missing-evidence',
      title:'The hidden cost of missing evidence',
      teaser:'The difference between “this did not happen” and “we do not know whether it happened”.',
      category:'Evidence & bias',
      status:'Research notebook · concept',
      read:'4 min read',
      image:'art-missing.svg',
      intro:'A blank field in a dataset is not a blank space in reality. It is a question about what happened before the record was created.',
      paragraphs:[
        {heading:'One record, several stories',text:'Suppose a medical record never mentions a particular symptom. Perhaps the patient did not experience it. Perhaps nobody asked. Perhaps the answer was not recorded. The observed record alone may not tell us which story is true.'},
        {heading:'Why the distinction matters',text:'Models learn from what was captured. If we confuse a missing observation with an absent event, we can reconstruct decisions using evidence that was never available—or overlook information that should have been considered.'},
        {heading:'An open research question',text:'How can computational methods represent not just observed values, but also the pathways through which information is elicited, selected, recorded and acted upon? This is an ongoing direction of inquiry rather than a claim of a solved problem.'}
      ],
      footnote:'Research notebook concept; not a published research result.'
    }
  ]
};
