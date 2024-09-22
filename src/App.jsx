import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./assets/home-button.png";
import './App.css'
import Header from "./components/header";
import Logo from "./assets/logo.gif";
import User from "./assets/user.png";
import Banner from "./components/bgBanner";
import bannerPic from "./assets/banner.gif"
import Dashboard from "./components/dashboard";
function App() {


  return (
    <BrowserRouter>
      <Header logo={Logo} user={User} />
      <Nav image={Home} />
      <Banner pic={bannerPic} />
      <Dashboard/>

    </BrowserRouter>
  )
}


export default App
