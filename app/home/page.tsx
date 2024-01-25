"use client"

import { logIn } from "../RTK/redux/features/auth-slices";
import { useDispatch } from "react-redux"
import { AppDispatch } from "../RTK/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomeComponent = () => {
    // 
    const [Username, setUsername] = useState<string>("")
    
    const router = useRouter()
    
    const dispatch = useDispatch<AppDispatch>();
    
    const onClickLogIn = () =>{
      dispatch(logIn(Username))
      router.push("/dashboard")
    }
    
    
      return (
        <section className='mx-8 my-8 text-center'>
    
        <input type="text" className="border" onChange={(e)=>setUsername(e.target.value)} />
    <br />
    <br />
    <br />
    
    <button onClick={onClickLogIn}>Log In</button>
    <br /><br />
    <button>Log Out</button>
        </section>
      )
    }
    
    export default HomeComponent