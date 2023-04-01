import React from 'react'

import "./post.css";
import { Users } from "./../../data";
import { IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Post({post}) {
  return (
    <div className='post'>
      <div className='postHead'>
      <div className="postTopLeft">
      <img src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt=""
                className="postProfileImg"
              />
              <div className='postDetails'>
               <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
            </div>
            </div>
      </div>
      <div className='postBody'>
      <div className="postCenter">
          <span className="postText">{post.body}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
      </div>
    </div>
  )
}

export default Post
