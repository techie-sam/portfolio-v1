import React from 'react'
import StyledCard from '../about/StyledCard'
import TextField from '@mui/material/TextField';
import {  } from '../constants';

const Contact = () => {
    const CONTACT_DETAILS = [
        { platform: "Email", address: "blessingabolade15@gmail.com", link: "https//b;essingabolade15@gmail.com", icon: '' },
        { platform: "LinkedIn", address: "LinkedIn", icon: '' },
        { platform: "WhatsApp", address: "Send a message",},
    ]
    const TEXT_FIELD_PROPS = [
        { id: "fullname", label: "Full Name", defaultValue: ""},
        { id: "email", label: "Email", defaultValue: ""},
        { id: "message", label: "Message", defaultValue: "", rows: "4", multiline: true },
    ]
    return (
        <section id="contact">
            <div className='text-center mt-5'>
                <h6>Get in Touch</h6>
                <h5>Contact Me</h5>
            </div>
            <StyledCard className='row gap-5'>
                <div className='row gap-3 col-lg-4 col-12 m-auto'>
                    {
                        CONTACT_DETAILS.map(({ platform, address, link, icon }, i) =>
                            <span key={platform}>
                                <a href={link} className="text-decoration-none">
                                    <h6>{platform}</h6>
                                    <small className='text-light d-block mb-3'>{address}</small>
                                    <small>Send Message</small>
                                </a>
                            </span>
                        )
                    }
                </div>
                <div className='col col-lg-6 rounded rounded-5'>
                    {
                        TEXT_FIELD_PROPS.map(({ id, label, defaultValue, rows, multiline }) =>
                            <TextField
                                key={id}
                                className='d-block mt-4'
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
                    <button className='btn btnPrimary mt-3'>SEND MESSAGE</button>
                </div>
            </StyledCard>
        </section>
    )
}

export default Contact