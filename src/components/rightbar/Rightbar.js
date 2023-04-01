
import React, {useState,useEffect} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Online from "../online/Online";
// import { Usersonline } from "../../data";
import './rightbar.css'
import { GetAllFriends } from '../../services/friendsService';
function Rightbar() {


  const[Usersonline,setFriends]=useState([]);

  useEffect(() => {
    async function fetchData() {
      GetAllFriends()
  .then((res) => {
      console.log("getall friends success....", res);
      setFriends(res.data.reverse());
  })
  .catch(()=>{
      toast.error('Get friends failed', {
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
     
    }
    fetchData();
  }, []);





  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        {/* <img
          src="/assets/birthdaygifts/gift.png"
          alt=""
          className="birthdayImg"
        /> */}
        <span className="birthdayText">
          <b>Yadhu </b> and <b>other friends</b> have a birthday today
        </span>
      </div>
    

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  )
}

export default Rightbar
