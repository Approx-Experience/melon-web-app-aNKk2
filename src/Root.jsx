import React from "react"
import NavigationBar from "./components/NavigationBar.jsx"
import { Outlet } from "react-router-dom"

const Root = () => {
    console.log("this is a change")
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default Root
