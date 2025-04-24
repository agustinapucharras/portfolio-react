import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import fotoPersonal from '../assets/fotoPersonal.jpg'
import Footer from '../components/Footer'

const Home = () => {

    let Alumno = {
        nombre: "Agustina",
        apellido: "Pucharras",
        lenguajes: ["JavaScript,", "C#,", "HTML,", "CSS."],
        mascotas: {
            nombre: "Polo",
            raza: "Beagle",
            edad: 5
        },
        imagen: fotoPersonal
    }


  return (
    <div>
      <Header/>
      <Main Alumno={Alumno}/>
      <Footer/>
    </div>
  )
}

export default Home
