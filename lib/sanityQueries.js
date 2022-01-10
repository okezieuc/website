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

export const sanityPastQuestionQuery = `*[_type == "pastquestion" && _id == $questionid]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
	answer, explanation,
}`

export const sanitySimilarPastQuestionIdQuery = `*[_type == "pastquestion" && exam == $exam && subject == $subject && year == $year && !(_id in path('drafts.**'))] {
	_id,
	"hasExplanation": defined(explanation),
	"hasAnswer": defined(answer)	
} | order(hasExplanation desc, hasAnswer desc, _createdAt asc)`

export const sanityPastQuestionIdQuery = `*[_type == "pastquestion" && !(_id in path('drafts.**'))]._id`