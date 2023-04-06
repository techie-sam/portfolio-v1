import React from 'react'
import StyledFooter from './StyledFooter'
import { Twitter, LinkedIn, GitHub } from '@mui/icons-material'
import { githubAddress, linkedinAddress, twitterAddress } from '../../constants'


const Footer = () => {
    const PREMALINKS = [
        { link: '#', text: 'Home' },
        { link: '#about', text: 'About' },
        { link: '#skills', text: 'Skills' },
        { link: '#projects', text: 'Projects' },
        { link: '#contact', text: 'Conatct' },
    ]

    return (
        <StyledFooter style={{ backgroundColor: 'var(--color-primary)', color: 'var(--light-slate)', paddingBottom:"10rem" }} className="text-light mt-5">
            <div className='text-center p-3'>
                <a href="#home" className="fs-3 fw-bold text-decoration-none">Samuel Abolade</a>
            </div>

            <ul className="row gap-3 gap-lg-0 col-9 m-auto p-4">
                {
                    PREMALINKS.map(({ link, text }) =>
                        <li key={text} className='col-12 col-lg fs-6 text-center'><a href={link} className='text-decoration-none'>{text}</a></li>
                    )
                }
            </ul>
            <div className='text-center'>
                <a href={twitterAddress} rel="noreferrer" target="_blank"><Twitter /></a>
                <a href={linkedinAddress} rel="noreferrer" target="_blank"><LinkedIn /></a>
                <a href={githubAddress} rel="noreferrer" target="_blank"><GitHub /></a>
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