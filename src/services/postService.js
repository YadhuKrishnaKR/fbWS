import React from "react";

import axios from "axios";
import { User } from "./storage";

export const CreatePost = (data) => {
  const logedUser=User.get()
  console.log(logedUser);
    data.userId=logedUser.id;
        var Post = new Promise(function(resolve, reject) {
    
          
              axios.post("http://localhost:3000/Posts",data).then((response) => {
                resolve(true);
              }).catch((ex)=>{
                reject();
              });
    
            });
             
            return Post;
    
    };

    export const GetAllPosts = (data) => {
    
        var Post = new Promise(function(resolve, reject) {
    
          
              axios.get("http://localhost:3000/Posts",data).then((response) => {
                resolve(response);
              }).catch((ex)=>{
                reject();
              });
    
            });
             
            return Post;
    
    };

    export const UpdatePost = (data) => {
    
      var Post = new Promise(function(resolve, reject) {
  
        
            axios.put("http://localhost:3000/Posts/"+data.id,data).then((response) => {
              resolve(true);
            }).catch((ex)=>{
              reject();
            });
  
          });
           
          return Post;
  
  };

