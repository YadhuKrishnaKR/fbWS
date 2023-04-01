import React from 'react'
import './profile.css'
function Profile(props) {
    const coverStyle={
        backgroundImage: 
 "url('"+props.user.coverPicture+"')",
    
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    console.log(props);
    return (
        <div>
            <div className="feed">
                <div className="feedWrapper">
                    <div className='profileHead'   style={coverStyle}>
                       
                    </div>
                    <div className='profileFoot'>
                    <img src={props.user.profilePicture} alt="" className="profile" />
                   
                        <h1 className="username">{props.user.username}</h1>
                        <div className='profileInfo'>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
