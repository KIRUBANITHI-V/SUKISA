import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./login"
import View from "./view"

function Root(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/view" element={<View/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Root
