import React from 'react'
import "./online.css";
import { RemoveFriend } from '../../services/friendsService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Online({ onlineuser }) {
  const removeFriend=() => {

   
    // let payload ={
    //   id: 1,
    //   name: "",
    //   username: "",
    //   email: "",
    //   profilePicture: ""
    // }
console.log(onlineuser);

RemoveFriend(onlineuser)
    .then((res) => {
        console.log("Friend Removed ....", res);
        toast.success('Friend Removed Successfully.', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      //  navigate("/home");
    })
    .catch(()=>{
        toast.error('Friend Remove Failed.', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    });


  };
  return (
    <div className="online">
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={onlineuser.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{onlineuser.username}</span>
      <button className="btn btn-primary" id="postBtn" onClick={removeFriend}>Remove</button>

    </li>
  </div>
  )
}

export default Online
