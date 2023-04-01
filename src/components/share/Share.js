import {
    Close,
    EmojiEmotions,
    PermMedia,
    VideoCameraFront,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./share.css";
import { CreatePost } from "../../services/postService";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Share({onUpdate }) {
    const [file, setFile] = useState(null);
    const [byteFile, setByteFile] = useState(null);
    const [caption, setCaption] = useState('');

    const [dataUri, setDataUri] = useState('')

    const onChange = (image) => {
        setFile(image)
      
      if(!image) {
        setDataUri('');
        return;
      }
  
      fileToDataUri(image)
        .then(dataUri => {
          setDataUri(dataUri)
        })
      
    }

    const handleChange = (event) => {
        // const cap = event.target.name;
        const cap = event.target.value;
        setCaption(cap)
    }

  const removeImage = () => {
    setFile(null);
  };
  const fileToDataUri = (img) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(img);
    })

  const post=() => {
   // saveImage(file)
   
//    const formData = new FormData();
//    fileToDataUri(file)
//    .then(dataUri => {
//     console.log(dataUri)
//     setByteFile(dataUri)
//    })
//    formData.append("file", file);
//    formData.append("userId", 3);
//    formData.append("title", caption);
//    formData.append("file", file);
//    formData.append("file", file);
    let payload = {
       // userId: 3,
       // id: 10,
        title: caption,
        body: caption,
        photo: dataUri,
        date: "just now",
        like: "100",
        comment: "70"
      }
console.log(payload);

CreatePost(payload)
    .then((res) => {
        console.log("Post created....", res);
        toast.success('Posted Successfully.', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            onUpdate();
            removeImage();
      //  navigate("/home");
    })
    .catch(()=>{
        toast.error('Post create Failed.', {
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
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src="/assets/person/user.jpg"
                        alt=""
                        className="shareProfileImg"
                    />
                    <input
                    cols="40" 
                    rows="5" 
                        type="text"
                        placeholder="What's on your mind Amber ?"
                        className="shareInput"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary" id="postBtn" onClick={post}>Post</button>
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Close className="shareCancelImg" onClick={removeImage} />
                    </div>
                )}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <VideoCameraFront
                                className="shareIcon"
                                style={{ color: "#bb0000f2" }}
                            />
                            <span className="shareOptionText">Live Video</span>
                        </div>
                        <label htmlFor="file" className="shareOption">
                            <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
                            <span className="shareOptionText">Photo/Video</span>
                            <input
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                style={{ display: "none" }}
                                onChange={(event) => onChange(event.target.files[0] || null)}
                              //  onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <EmojiEmotions
                                className="shareIcon"
                                style={{ color: "#bfc600ec" }}
                            />
                            <span className="shareOptionText">Feelings/Activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function saveImage(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'example.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

export default Share
