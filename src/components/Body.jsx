import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"

import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Navigate } from "react-router-dom";

const Body = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector((store) => store.user);

    const [loading, setLoading] = useState(true); // 👈 NEW

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
            } else {
                dispatch(removeUser());
            }
            setLoading(false); // 👈 auth check finished
        });

        return () => unsubscribe();
    }, [dispatch]);

    // 🛑 Wait until Firebase finishes checking auth
    if (loading) return null; // or spinner

    // 🔐 Route Protection
    if (!user && location.pathname === "/browse") {
        return <Navigate to="/" replace />;
    }

    if (user && location.pathname === "/") {
        return <Navigate to="/browse" replace />;
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Body;
