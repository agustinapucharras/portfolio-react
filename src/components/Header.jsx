import React from 'react'
import "../css/header.css"

const Header = () => {

    let Alumno = "Agustina Pucharras"


  return (
    <div className='gradient-background'>
      <h1 className='h1Header'>Portfolio {Alumno} </h1>
      <hr />
    </div>
  )
}

export default Header
