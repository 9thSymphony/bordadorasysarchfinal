import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

export const Data = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    },
    
    {
        title: 'Job Board',
        path: '/jobboard',
        icons: <BsIcons.BsClipboard2Fill />,
        cname: 'nav-text'
    },
    
    {
        title: 'Skill Development',
        path: '/skilldev',
        icons: <BsIcons.BsFillFilePersonFill />,
        cname: 'nav-text'
    },

    {
        title: 'Networking and Support',
        path: '/networking',
        icons: <BiIcons.BiSupport />,
        cname: 'nav-text'
    },

    {
        title: 'Resource Center',
        path: '/resource',
        icons: <BiIcons.BiFileFind />,
        cname: 'nav-text'
    },

    {
        title: 'Success Stories',
        path: '/stories',
        icons: <BsIcons.BsPersonFillCheck />,
        cname: 'nav-text'
    },

    {
        title: 'About',
        path: '/about',
        icons: <AiIcons.AiFillQuestionCircle />,
        cname: 'nav-text'
    },

]