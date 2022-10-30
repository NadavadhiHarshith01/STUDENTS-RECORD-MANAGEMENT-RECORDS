import React, {
  useState
} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login({setLoginUser}) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }
const button=()=>{
  const{username,password}=user
  if(username&&password){
    alert("posted");
  axios.post("http://localhost:3000/loginc",user)
  .then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
    navigate('/')

  })
}else{
  alert("invalid input")
}
}


  return ( <
    div >
    <
    form action = ""
    method = "POST" >
    <div >
    < img className = "img_job" src = "https://cdn.bigjobindia.com/2022/05/West_Bengal_Police_Logo.png" / >
    < /div>
    <div > < input placeholder = "USERNAME"
    name = "username"
    value = {
      user.username
    }
    onChange = {
      handleInputs
    }
    type = "text" / > < /div> <
    div > < input placeholder = "PASSWORD"
    name = "password"
    value = {
      user.password
    }
    onChange = {
      handleInputs
    }
    type = "password" / > < /div> <
    button type = "button"
    onClick={button}
    class = "btn btn-outline-success" >
    Login <
    /button> <
    /form> <
    /div>
  );
}
export default Login;
