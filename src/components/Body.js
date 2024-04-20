import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body