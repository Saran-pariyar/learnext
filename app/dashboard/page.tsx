"use client"


import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { useAppSelector } from '../RTK/redux/store'
import { logOut, toggleModerator } from '../RTK/redux/features/auth-slices'
import { AppDispatch } from "../RTK/redux/store"


const DashBoard = () => {

    const username = useAppSelector((state) => state.authReducer.value.username )
    const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)


    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter()


    const onClickLogOut = () =>{
      dispatch(logOut())
      router.push("/home")

    }

    const onClickToggleModerator = () =>{
      dispatch(toggleModerator())
    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className=''>Username: {username}</h1>
        <h2>{isModerator && "User is a Moderator"}</h2>
        <button onClick={onClickLogOut}>log out</button>
        <button onClick={onClickToggleModerator}>Toggle Moderator Status</button>
    </div>
  )
}

export default DashBoard