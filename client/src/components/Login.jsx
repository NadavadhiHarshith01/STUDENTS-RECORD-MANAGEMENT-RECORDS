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
    < img  className = "img_job" src = "https://www.managedoutsource.com/wp-content/uploads/2021/05/7-best-student-record-management-systems-for-schools.jpg" / >
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
