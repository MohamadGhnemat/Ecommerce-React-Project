import axios from "axios"
import { useState } from "react"
import { object, string } from 'yup';
import style from './SignUp.module.css'
function SignUp() {
  const[user,setUser] = useState({
    userName: "",
    email: "",
    password : "",
    image : "", 

  })
  const [errors,setErrors] = useState([]);
  const handelChange = (e) => {
    const {name ,value} = e.target
    setUser({
      ...user ,
       [name] : value ,
      })
    
  }
  const handelImageChange = (e) => {
    const {name ,files} = e.target;
    setUser({
      ...user ,
      [name] :files[0]
    })

  }
  const validateData = async() => {
   const RegiseterSchema  =  object({
      userName: string().min(5).max(30).required(),
      email: string().email().required(),
      password: string().min(8).max(20).required(),
      image: string().required(),
    })
   try{

    await RegiseterSchema.validate(user,{abortEarly:false});
    return true;
   }catch(error) {

    setErrors(error.errors)
  console.log(error.errors)
    return false;
   }
  }

  const handelSubmit = async(e) => {
e.preventDefault();

if(await validateData()){
  const formData = new FormData();
  formData.append("userName",user.userName);
  formData.append("email",user.email);
  formData.append("password",user.password);
  formData.append("image",user.image);

    const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData).catch(err => console.log(err.response.data.message));
    setUser({
     userName: "",
     email: "",
     password : "",
     image : "", 
 
   })
    console.log(data.message);
}

  };
  return (
    <>
   
     {/* {errors.length > 0 ? errors.map((error,i) => 
      <p key={i}>{error}</p>
     ): ""} */}
          {/* <form onSubmit={handelSubmit}>
        <label htmlFor="userName">user Name</label>
        <input type="text" id="userName" value={user.userName} name="userName" onChange={handelChange}/>
        
        <label htmlFor="email">email</label>
        <input type="email" id="email" value={user.email} name="email" onChange={handelChange}/>
        <label htmlFor="password">password</label>
        <input type="password" id="password" value={user.password} name="password" onChange={handelChange}/>
        <label htmlFor="image">Image</label>
        <input type="file" id="image"  name="image" onChange={handelImageChange}/>

        <button type="submit">submit</button>
     </form> */}

<form onSubmit={handelSubmit}>
  <div className={style.container}>
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="userName"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" id="userName" value={user.userName} name="userName" onChange={handelChange}/>
   
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email"  id="email" value={user.email} name="email" onChange={handelChange}/>
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" id="password" value={user.password} name="password" onChange={handelChange}/>
     
        <input type="file" id="image"  name="image" onChange={handelImageChange}/>
    <hr />
    <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
    <button type="submit"className={style.registerbtn} >Register</button>
  </div>
  <div className={[style.container, style.signin].join(" ")}>
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>

    </>
  )
}

export default SignUp
