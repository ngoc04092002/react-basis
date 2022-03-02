import React from 'react'
import { BsLinkedin,BsGithub} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.facebook.com/profile.php?id=100009696701104"><BsLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100009696701104"><BsGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100009696701104"><AiOutlineInstagram/></a>
        </div>
    )
}

export default HeaderSocials