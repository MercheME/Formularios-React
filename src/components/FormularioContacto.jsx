import React, {useState} from "react";
import { useForm } from 'react-hook-form';

function FormularioContacto() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch
    } = useForm();

 const onSubmit = data => console.log(data);
 
 return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input
                {...register("nombre", {
                required: "Nombre es requerido",
                minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres"
                }
                })}
                placeholder="Nombre"
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
        <div>
            <input
            {...register("email", {
                required: "Email es requerido",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                }
                })}
                placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}
        </div>

     <button type="submit">Enviar</button>
    </form>
 )
}
export default FormularioContacto;