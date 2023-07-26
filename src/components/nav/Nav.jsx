import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import StyledNav from './StyledNav';



const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home")
    const NAV_CONTENT = [
        { href: "#home", icon: <HomeRoundedIcon className='fs-6' /> },
        { href: "#about", icon: <PersonIcon className='fs-6' /> },
        { href: "#skills", icon: <CollectionsBookmarkRoundedIcon className='fs-6' /> },
        { href: "#projects", icon: <WorkHistoryIcon className='fs-6' /> },
        { href: "#contact", icon: <SpeakerNotesIcon className='fs-6' /> }
    ]

    return (
        <StyledNav>

            <nav>
                {
                    NAV_CONTENT.map(({ href, icon }, index) =>
                        <a key={href} href={href} onClick={() => setActiveNav(href)} className={activeNav === href ? 'active' : null}>
                            {icon}
                        </a>
                    )
                }
            </nav>
        </StyledNav>
    )
}

export default Nav