import './App.css'
import React from "react"
import Menu from './components/Menu'
import OpenHours from './components/OpenHours'
import SmilingGuy from './components/SmilingGuy'
import Register from "./components/Register.jsx"
import Footer from "./components/Footer.jsx"
import Order from "./components/Order.jsx"


function App() {


  return (

    <>
      <Menu />
      <OpenHours />
      <SmilingGuy />
      <Order />
      <Register />
      <Footer />
    </>

  )
}

export default App
