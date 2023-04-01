import React from "react";
// import request from "../services/request";
import { Config, User } from "../services/storage";
import axios from "axios";
// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export const Login = (data) => {
// console.log("login reached"+{...data})
	// return request("http://localhost:3000/users", {
	// 	method: "POST",
	// 	data
	// }).then(data => {
	// 	// console.log(data)
	// 	User.set(data);
	// 	Config.set(data);
	// 	return data;
	// });
    var Authenticate = new Promise(function(resolve, reject) {

      
          axios.get("http://localhost:3000/Users").then((response) => {
            var users=response.data;
            const res = users.find((user) => user.email === data.email && user.password === data.password);
            if(res){
              User.set(res);
	//	Config.set(res);
                resolve(res);
            }
            reject();
            // users.forEach(element => {
            //     console.log(element);
            //     if(element.username==data.username && element.password==data.password){
            //         var res={
            //             status:true,
            //             user:element
            //         }
            //         resolve(res);
            //     }
                
            // });
           
            
          });

        });
         
        return Authenticate;

};

export const Register = (data) => {
    // console.log("login reached"+{...data})
        // return request("http://localhost:3000/users", {
        // 	method: "POST",
        // 	data
        // }).then(data => {
        // 	// console.log(data)
        // 	User.set(data);
        // 	Config.set(data);
        // 	return data;
        // });
        var Register = new Promise(function(resolve, reject) {
    
          
              axios.post("http://localhost:3000/Users",data).then((response) => {
                resolve(true);
              }).catch((ex)=>{
                reject();
              });
    
            });
             
            return Register;
    
    };


