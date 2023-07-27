import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TEXT_FIELD_PROPS = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "John Doe",
    multiline: false,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "johndoe@example",
    multiline: false,
  },
  {
    name: "message",
    label: "Message",
    rows: "4",
    multiline: true,
    placeholder: "Message here...",
  },
];

const ContactInputs = () => {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};
      // Check first name Validity
      if (!values.fullName.trim()) {
        errors.fullName = "Full Name is required";
      } else if (values.fullName.length < 5 || values.fullName.length > 15) {
        errors.fullName = "Full Name must be 15 characters or less";
      }

      // Check Email Validity
      if (!values.email.trim()) {
        errors.email = "Email is Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      // Check Message Validity
      if (!values.message.trim()) {
        errors.message = "Message cannot be empty";
      } else if (values.message.trim().length < 10) {
        errors.message = "Message should contain at least 10 characters";
      }
      return errors;
    },

    onSubmit: (values, { setSubmitting, resetForm }) => {
      fetch("https://techiesamm.vercel.app/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((res) => {
          setSubmitting(false);
          resetForm();
          console.log(res);
          console.log();
          if (res.status === "fail" || res.status === "error")
            return toast.error(res.message);
          toast.success(res.message);
        })
        .catch(() => {
          setSubmitting(false);
          resetForm();
          toast.error("An error occurred while sending message!");
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ToastContainer />
        {TEXT_FIELD_PROPS.map(
          ({ name, label, rows, placeholder, multiline }) => (
            <TextField
              key={name}
              style={{ color: "#ffff" }}
              type={name === "email" ? "email" : "text"}
              className="d-block mt-4 text-light"
              name={name}
              placeholder={placeholder}
              id={name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values[name]}
              //  ========== MUI PROPERTIES ==========
              InputProps={{
                style: {
                  color: "#ffff",
                },
              }}
              error={formik.touched[name] && formik.errors[name] ? true : false}
              helperText={
                <span className="text-danger">
                  {formik.touched[name] ? formik.errors[name] : null}
                </span>
              }
              fullWidth
              label={label}
              focused
              rows={rows}
              multiline={multiline}
              required
            />
          )
        )}
        <button
          type="submit"
          className="btn rounded btnPrimary px-5 mt-3"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "SEND MESSAGE"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactInputs;
