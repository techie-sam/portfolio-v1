import React from 'react'
import StyledFooter from './StyledFooter'
import { Twitter, LinkedIn, GitHub } from '@mui/icons-material'


const Footer = (props) => {
    console.log(props.contactInfo)
    const PREMALINKS = [
        { link: '#', text: 'Home' },
        { link: '#about', text: 'About' },
        { link: '#skills', text: 'Skills' },
        { link: '#projects', text: 'Projects' },
        { link: '#contact', text: 'Conatct' },
    ]
    // const SOCIAL_LINKS =[
    //     {icon: Twitter, link}
    // ]
    return (
        <StyledFooter style={{ backgroundColor: 'var(--color-primary)', color: 'var(--light-slate)', paddingBottom:"30vh" }} className="text-light mt-5">
            <div className='text-center p-3'>
                <a href="#home" className="fs-3 fw-bold text-decoration-none">Samuel Abolade</a>
            </div>

            <ul className="row gap-3 gap-lg-0 col-9 m-auto p-4">
                {
                    PREMALINKS.map(({ link, text }) =>
                        <li className='col-12 col-lg fs-6 text-center'><a href={link} className='text-decoration-none'>{text}</a></li>
                    )
                }
            </ul>
            <div className='text-center'>
                <a href="#" target="_blank"><Twitter /></a>
                <a href="#" target="_blank"><LinkedIn /></a>
                <a href="#" target="_blank"><GitHub /></a>
            </div>
            <div className="text-center mt-4">
                <small>
                    &copy; Samuel Abolade. All right reserved.
                </small>
            </div>
        </StyledFooter>
    )
}

export default Footer 