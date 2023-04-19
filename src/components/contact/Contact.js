import React from 'react'
import StyledCard from '../../styles/StyledCard'
import TextField from '@mui/material/TextField';
import { linkedinAddress, emailAddress, whatsappLink } from '../../constants';

const Contact = () => {
    const CONTACT_DETAILS = [
        { platform: "LinkedIn", address: "@techie-sam", link: linkedinAddress, icon: '' },
        { platform: "Email", address: "techiesam.dev@gmail.com", link: emailAddress, icon: '' },
        { platform: "Twitter", address: "@techie_sam", link: whatsappLink, icon: '' },
        { platform: "WhatsApp", address: "Send a message", link: whatsappLink, icon: '' },
    ]
    const TEXT_FIELD_PROPS = [
        { id: "fullname", label: "Full Name", defaultValue: "" },
        { id: "email", label: "Email", defaultValue: "" },
        { id: "message", label: "Message", defaultValue: "", rows: "4", multiline: true },
    ]
    return (
        <section id="contact">
            <div className='text-center mt-5'>
                <h6>Get in Touch</h6>
                <h5>Contact Me</h5>
            </div>
            <StyledCard className='row gap-5 m-auto'>
                <ul className='row gap-3 col-lg-4 col-12 m-auto'>
                    {
                        CONTACT_DETAILS.map(({ platform, address, link }) =>
                                <li>
                                    <a href={link} target='_blank' className="text-decoration-none" rel="noreferrer">
                                        <h6>{platform}</h6>
                                        <small className='text-light d-block mb-3'>{address}</small>
                                        <small>Send Message</small>
                                    </a>
                                </li>
                        )
                    }
                </ul>
                <div className='col col-lg-6 rounded rounded-5'>
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
                </div>
            </StyledCard>
        </section>
    )
}

export default Contact