import React from "react";

import axios from "axios";


export const RemoveFriend = (data) => {

    
        var Friend = new Promise(function(resolve, reject) {
    
          
              axios.delete("http://localhost:3000/Usersonline/"+data.id).then((response) => {
                resolve(true);
              }).catch((ex)=>{
                reject();
              });
    
            });
             
            return Friend;
    
    };

    export const GetAllFriends = () => {
    
        var Users = new Promise(function(resolve, reject) {
    
          
              axios.get("http://localhost:3000/Usersonline").then((response) => {
                resolve(response);
              }).catch((ex)=>{
                reject();
              });
    
            });
             
            return Users;
    
    };

