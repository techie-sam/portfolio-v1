import React from 'react'
import StyledCard from '../about/StyledCard'

const Contact = () => {
    const CONTACT_DETAILS = [
        { platform: "Email", address: "blessingabolade15@gmail.com", link: "https//b;essingabolade15@gmail.com", icon: '' },
        { platform: "LinkedIn", address: "Send a message", link: "https//linkedin.com/in/techie-sam", icon: '' },
        { platform: "WhatsApp", address: "Send a message", icon: '' },
        { platform: "Email", address: "blessingabolade15@gmail.com", icon: '' },
    ]
    return (
        <section id="contact">
            <div className='text-center mt-5'>
                <h6>Get in Touch</h6>
                <h5>Contact</h5>
            </div>
            <StyledCard className='row gap-3 col-lg-4 p-lg-5'>
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
            </StyledCard>
        </section>
    )
}

export default Contact