import axios from "axios"
import { useState } from "react"
import { object, string } from 'yup';
import style from  "./SignIn.module.css"
function SignIn() {
  const[user,setUser] = useState({
    email: "",
    password : "",
  })
 
  const handelChange = (e) => {
    const {name ,value} = e.target
    setUser({
      ...user ,
       [name] : value ,
      })
    
  }

  const validateData = async() => {
   const LoginSchema  =  object({
     email: string().min(5).max(30).required(),
      password: string().min(8).max(20).required(),
    })
   try{

    await LoginSchema.validate(user,{abortEarly:false});
    return true;
   }catch(error) {
    console.log("Validation Error" , error.errors)
    return false;
   }
  }

  const handelSubmit = async(e) => {
  e.preventDefault();
   

if(await validateData()){
   
    const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signin`,{user}).catch(err => console.log(err.response.data.message));
    setUser({
     email: "",
     password : "",
   })
    console.log(data.message);
}

  };
 
  return (
    <>
 
    <div  className={style.modal}>
  <form  onSubmit={handelSubmit} className={[style.modalContent , style.animate ].join(" ")}>
    <div className={style.imgcontainer}>
    
      <img src={'images/user.png'} alt="Avatar" className={style.avatar}  />
    </div>
    <div className={style.container} >
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" value={user.email} name="email" onChange={handelChange} />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" value={user.password} name="password" onChange={handelChange} />
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
      </label>
    </div>
    <div className={style.container} style={{backgroundColor: '#f1f1f1'}}>
      <button type="button"  className={style.cancelbtn}>Cancel</button>
      <span className={style.psw}>Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>




    </>
  )
}

export default SignIn
