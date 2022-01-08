export const sanitySubjectPageQuery = `*[_type == "pastquestion" && subject == $subject && !(_id in path('drafts.**'))]{
    _id,
    exam,
    subject,
    year,
    'prompt': prompt->prompt,
    question,
    optiona, optionb, optionc, optiond, optione,
    "hasAnswer": defined(answer),
    "hasExplanation": defined(explanation)
  } | order(hasExplanation desc, hasAnswer desc, _createdAt asc) [$lower...$higher]`;

export const sanitySubjectPageCountQuery = `count(*[_type == "pastquestion" && subject == $subject && !(_id in path('drafts.**'))])`
