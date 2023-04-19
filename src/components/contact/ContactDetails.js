import { linkedinAddress, emailAddress, whatsappLink } from '../../constants';

const CONTACT_DETAILS = [
    { platform: "LinkedIn", address: "@techie-sam", link: linkedinAddress, icon: '' },
    { platform: "Email", address: "techiesam.dev@gmail.com", link: emailAddress, icon: '' },
    { platform: "Twitter", address: "@techie_sam", link: whatsappLink, icon: '' },
    { platform: "WhatsApp", address: "Send a message", link: whatsappLink, icon: '' },
]
const ContactDetails = () => {
    return (
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
    )
}

export default ContactDetails