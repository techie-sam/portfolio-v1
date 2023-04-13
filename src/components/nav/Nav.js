import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import StyledNav from './StyledNav';



const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")

    return (
        <StyledNav>

            <nav>
                <a href="#home" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ""}>
                    <HomeRoundedIcon className='fs-6' />
                </a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : " "}>
                    <PersonIcon className='fs-6' />
                </a>
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "active" : " "}>
                    <CollectionsBookmarkRoundedIcon className='fs-6' />
                </a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? "active" : " "}>
                    <WorkHistoryIcon className='fs-6' />
                </a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : " "}>
                    <SpeakerNotesIcon className='fs-6' />
                </a>
            </nav>
        </StyledNav>
    )
}

export default Nav