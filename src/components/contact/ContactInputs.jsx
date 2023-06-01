import TextField from '@mui/material/TextField';

const TEXT_FIELD_PROPS = [
  { id: "fullname", label: "Full Name", defaultValue: "" },
  { id: "email", label: "Email", defaultValue: "" },
  { id: "message", label: "Message", defaultValue: "", rows: "4", multiline: true },
]

const ContactInputs = () => {
  return (
    <>
      {
        TEXT_FIELD_PROPS.map(({ id, label, defaultValue, rows }) =>
          <TextField
            key={id}
            className='d-block mt-4'
            InputProps={{
              style: {
                color: '#ffff'
              }
            }}
            fullWidth
            id={id}
            label={label}
            defaultValue={defaultValue}
            focused
            rows={rows}
            multiline
          />
        )
      }
      <button className='btn btn-primary btnPrimary mt-3'>SEND MESSAGE</button>
    </>
  )
}

export default ContactInputs