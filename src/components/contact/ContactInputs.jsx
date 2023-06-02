import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useRef } from 'react';


const TEXT_FIELD_PROPS = [
  { name: "fullName", label: "Full Name", placeholder: "John Doe", multiline: false },
  { name: "email", label: "Email", placeholder: "johndoe@example", multiline: false },
  { name: "message", label: "Message", rows: "4", multiline: true, placeholder: "Message here..." },
]

const ContactInputs = () => {

  const initialValues = {
    fullName: "",
    email: "",
    message: ""
  }

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      // const { fullName, email, message } = values
      const errors = {}

      // console.log(values)
      if (!values.fullName) {
        errors.fullName = "Full Name is required"
      } else if (values.fullName.length > 15) {
        errors.fullName = 'Full Name must be 15 characters or less';
      }

      if (!values.email) {
        errors.email = 'Email is Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = "Message cannot be empty"
      }
      return errors
    },
    onSubmit: () => {
      // console.log(djhwkdww)
      // if 
      console.log(errors)
      //   console.log(formik.touched)
      //  console.log(formik.dirty)
      // console.log(errors)
    },


  })
  // console.log(formik.handle)



  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {
          TEXT_FIELD_PROPS.map(({ name, label, rows, placeholder, multiline }) =>
            <TextField
              key={name}
              style={{ color: '#ffff' }}
              type={name === "email" ? "email" : "text"}
              className='d-block mt-4 text-light'
              name={name}
              placeholder={placeholder}
              id={name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}


              //  ========== MUI PROPERTIES ==========
              InputProps={{
                style: {
                  color: '#ffff',
                }
              }}
              error={formik.touched[name] ? formik.errors[name] : false}
              helperText={<span className='text-danger'>{formik.touched[name] ? formik.errors[name] : null}</span>}
              fullWidth
              label={label}
              focused
              rows={rows}
              multiline={multiline}
              required
            />
          )
        }
        <button type='submit' className='btn rounded btnPrimary mt-3'>SEN MESSAGE</button>
      </form>
    </>
  )
}

export default ContactInputs