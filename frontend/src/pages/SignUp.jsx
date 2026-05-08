import React, { useState } from 'react'
import logo from '../assets/logo.png'
import google from '../assets/google.jpg'
import axios from 'axios'
import { serverUrl } from '../App'
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/Firebase'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'
function SignUp() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [role,setRole]= useState("student")
    const navigate = useNavigate()
    let [show,setShow] = useState(false)
    const [loading,setLoading]= useState(false)
    let dispatch = useDispatch()

    const handleSignUp = async () => {
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/auth/signup" , {name , email , password , role} , {withCredentials:true} )
            dispatch(setUserData(result.data))

            navigate("/")
            toast.success("SignUp Successfully")
            setLoading(false)
        } 
        catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.response.data.message)
        }
        
    }
    const googleSignUp = async () => {
        try {
            const response = await signInWithPopup(auth,provider)
            console.log(response)
            let user = response.user
            let name = user.displayName;
            let email=user.email
            
            
            const result = await axios.post(serverUrl + "/api/auth/googlesignup" , {name , email ,role}
                , {withCredentials:true}
            )
            dispatch(setUserData(result.data))
            navigate("/")
            toast.success("SignUp Successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        
    }
  return (
    <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-3'>
        <form className='w-[90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex' onSubmit={(e)=>e.preventDefault()}>
            <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3 '>
                <div><h1 className='font-semibold text-[black] text-2xl cursor-default'>Let's get Started</h1>
                <h2 className='text-[#999797] text-[18px] cursor-default'>Create your account</h2>
                </div>
                <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                    <label htmlFor="name" className='font-semibold'>
                        Name
                    </label>
                    <input id='name' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'placeholder='Your name' onChange={(e)=>setName(e.target.value)} value={name} />
                </div>
                 <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                    <label htmlFor="email" className='font-semibold'>
                        Email
                    </label>
                    <input id='email' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'placeholder='Your email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                 <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                    <label htmlFor="password" className='font-semibold'>
                        Password
                    </label>
                    <input id='password' type={show?"text":"password"} className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]' placeholder='***********' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {!show && <MdOutlineRemoveRedEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev => !prev)}/>}
              {show && <MdRemoveRedEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev => !prev)} />}
                </div>
                 <div className='flex md:w-[50%] w-[70%] items-center justify-between'>
                  <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] rounded-2xl  cursor-default hover:border-black ${role === 'student' ? "border-black" : "border-[#646464]"}`} onClick={()=>setRole("student")}>Student</span>
                  <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] rounded-2xl  cursor-default hover:border-black ${role === 'educator'? "border-black" : "border-[#646464]"}`}  onClick={()=>setRole("educator")}>Educator</span>
                </div>
                <button className='w-[80%] h-[40px] bg-black text-white cursor-default flex items-center justify-center rounded-[5px] transition' disabled={loading} onClick={handleSignUp}>{loading?<ClipLoader size={30} color='white' /> : "Sign Up"}</button>
             

                <div className='w-[80%] flex items-center gap-2 cursor-default'>
                    <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                    <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center'>Or continue with</div>
                    <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                </div>
                <div className='w-[80%] h-[40px] border-1 border-[black] rounded-[5px] flex items-center justify-center cursor-default transition' onClick={googleSignUp} ><img src= "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ii8+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiIvPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjwvc3ZnPg==" alt="" className='w-[25px]' /><span className='text-[18px] text-black-500 cursor-default'>oogle</span> </div>
                 <div className='text-[#6f6f6f] cursor-default'>Already have an account? <span className='underline underline-offset-1 text-[black] cursor-default transition' onClick={()=>navigate("/login")}>Login</span></div>

            </div>
            <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'><img src={logo} className='w-30 shadow-2xl' alt="" />
            <span className='text-[white] text-2xl'></span>
            </div>
           
        </form>
     
    </div>
  )
}

export default SignUp
