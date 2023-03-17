import React , { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <>
            <nav>
                <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : " "}><HomeRoundedIcon /></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : " "}><PersonIcon/></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : " "}><CollectionsBookmarkRoundedIcon /></a>
                <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "active" : " "}><FolderCopyOutlinedIcon /></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : " "}><SpeakerNotesIcon /></a>
            </nav>
        </>
    )
}

export default Nav