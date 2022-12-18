import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import GrowTogether from "./images/illustration-grow-together.svg";
import FlowingConversations from "./images/illustration-flowing-conversation.svg";
import YourUsers from "./images/illustration-your-users.svg";


export const mainData = [
    {
        id: 1,
        heading: "Grow Together",
        image: GrowTogether,
        text: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
        id: 2,
        heading: "Flowing Conversations",
        image: FlowingConversations,
        text: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
        id: 3,
        heading: "Your Users",
        image: YourUsers,
        text: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

export const footerLogoArea = [
    {
        id: 1,
        icon: <IoLocationSharp />,
        desc: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },

    {
        id: 2,
        icon: <HiOutlinePhoneOutgoing />,
        desc: "+234-90-4649-5688"

    },

    {
        id: 3,
        icon: <IoMailOutline />,
        desc: "example@huddle.com"

    }
]

export const footerLinksAbout = [
    {
        id: 1,
        desc: "About Us",
    },

    {
        id: 2,
        desc: "What We Do",
    },

    {
        id: 3,
        desc: "FAQ",
    }
]

export const footerLinksCareer = [
    {
        id: 1,
        desc: "Career"
    },

    {
        id: 2,
        desc: "Blog"
    },

    {
        id: 3,
        desc: "Contact Us"
    }
]

export const footerSocialArea = [
    {
        id: 1,
        icon: <TiSocialFacebookCircular />,
        desc: "facebook"
    },

    {
        id: 2,
        icon: <AiFillTwitterCircle />,
        desc: "twitter"
    },

    {
        id: 3,
        icon: <IoLogoInstagram />,
        desc: "instagram"
    }
]