import React, {useContext,createContext,useState,useEffect} from 'react'
import { UserContext } from '../../pages/Home'
// import Stories from "../stories/Stories";
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
// import { Posts } from "../../data";
import { GetAllPosts } from '../../services/postService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fbContext = createContext();
function Feed() {
  const countContext = useContext(UserContext)
  const[Posts,setPosts]=useState([]);
  const[count,setCount]=useState(0);
  useEffect(() => {
   
    fetchData();
  }, [count]);


  function handleChildUpdate() {
    setCount((c) => c + 1)
  }


  async function fetchData() {
    GetAllPosts()
.then((res) => {
    console.log("getallPost success....", res);
    setPosts(res.data.reverse());
})
.catch(()=>{
    toast.error('Get post failed', {
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

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <h1>{countContext.countState}</h1> */}
        {/* <Stories /> */}
        <Share onUpdate={handleChildUpdate}></Share>

        
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
