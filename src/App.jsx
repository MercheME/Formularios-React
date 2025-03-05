import { useState } from 'react'
import './App.css'
import FormularioContacto from "./components/FormularioContacto";
import RegistroFormulario from './components/RegistroFormulario';

function App() {

  return (
    <>

      <h1><strong>💭 Bienvenido a la Aplicaión</strong></h1>
      {/* <FormularioContacto></FormularioContacto> */}
      <RegistroFormulario />
    </>
  )
}

export default App;
