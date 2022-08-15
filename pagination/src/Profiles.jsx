import React from "react";
import User from "./User"
import { usePaginationContext } from "./Context";

const Profiles = () => {
    let { data } = usePaginationContext();
    console.log(data);
    return (
        <main>
            {data.profiles.map(profile => {
                return <User 
                key={profile.id} 
                img_url={profile.avatar_url} 
                username={profile.login} 
                alt_text={profile.login} 
                link={profile.html_url}
                />
            })
        }    
        </main>
    )
}

export default Profiles;