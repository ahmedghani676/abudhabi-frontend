import { useState, useEffect } from 'react'
import axios from 'axios'
const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    const postData = async () => {
      const URL = process.env.REACT_APP_BASE_URL + 'contact.php'
      const ipURL = process.env.REACT_APP_BASE_URL + 'ip.php'
      await axios
        .get(ipURL, {
          auth: {
            username: 'odpdkan',
            password: '317$Odp',
          },
        })
        .then((response) => {
          try {
            const contactResponse = axios({
              method: 'post',
              url: URL,
              data: JSON.stringify(
                {
                  name: values.name,
                  email: values.email,
                  subject: values.subject,
                  message: values.message,
                  ipaddress: response.data.ipaddress,
                },
                null,
                2
              ),
              auth: { username: 'odpdkan', password: '317$Odp' },
              headers: { 'Content-Type': 'application/json' },
            })
            console.log(contactResponse, 'Api is working')
          } catch (error) {
            // eslint-disable-next-line no-unused-expressions
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    postData()
    console.log(values, 'sdsdsd')
    setErrors(validate(values))
    setIsSubmitting(true)
  }
  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}
export default useForm