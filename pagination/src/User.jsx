import React from "react";

const User = ({ img_url, username, link, alt_text }) => {

    return (       
        <article className="profile">
            <div className="profile-content">
            <img className="profile-img" src={img_url} alt={alt_text} />
            <h4 className="profile-name">{username}</h4>
            <a href={link}><button className="profile-btn">VIEW PROFILE</button></a>
            </div>
        </article>      
    )
}

export default User;