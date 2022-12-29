export default function validate(values) {
  const errors = {}
  if (!values.name) {
    errors.name = 'Your name field is required.'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Your e-mail address field is required.'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.subject) {
    errors.subject = 'Subject field is required.'
  }
  if (!values.message) {
    errors.message = 'Message field is required'
  }
  if (!values.recahptca) {
    errors.recahptca = 'What code is in the image ? field is required.'
  }
  return errors
}
