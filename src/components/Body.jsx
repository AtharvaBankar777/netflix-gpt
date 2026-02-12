import React, { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {auth } from "../utils/firebase"

import Browse from './Browse'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse")
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});
    },[])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Body