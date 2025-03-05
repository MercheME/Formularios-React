import React , {useState}  from "react";
import { useForm } from "react-hook-form";

function RegistroFormulario() {
    const [mensaje, setMensaje] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            localStorage.setItem("formData", JSON.stringify(data));
            setMensaje("¡Se ha registrado correctamente!");
            setTimeout(() => setMensaje(""), 3000);
        } catch (error) {
            setMensaje("Hubo un error al registrar los datos. Intenta nuevamente.");
            setTimeout(() => setMensaje(""), 3000);
        }
    };

    const dataGuardar = JSON.parse(localStorage.getItem("formData"));
    if (dataGuardar) {
        console.log("Datos guardados correctamente:", dataGuardar);
    } else {
        console.log("Hubo un error al guardar los datos.");
    }

    return (
        <div>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 bg-teal-800 rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-center ">Login</h2>

                <div className="mb-4">
                <input
                    {...register("nombre", { required: "Nombre es requerido" })}
                    placeholder="Nombre"
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.nombre && <span className="text-rose-400 font-bold text-sm">❌ {errors.nombre.message}</span>}
                </div>

                <div className="mb-4">
                <input
                    {...register("apellido", { required: "Apellido es requerido" })}
                    placeholder="Apellido"
                    className="w-full p-3 border border-teal-300 bg-teal-950 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.apellido && <span className="text-rose-400 font-bold text-sm">❌  {errors.apellido.message}</span>}
                </div>

                <div className="mb-4">
                <input
                    {...register("correo", {
                    required: "Correo es requerido",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo inválido",
                    },
                    })}
                    placeholder="Correo"
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.correo && <span className="text-rose-400 font-bold text-sm">❌ {errors.correo.message}</span>}
                </div>

                <div className="mb-4">
                <input
                    type="password"
                    {...register("contraseña", {
                    required: "Contraseña es requerida",
                    minLength: { value: 8, message: "Mínimo 8 caracteres" },
                    })}
                    placeholder="Contraseña"
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.contraseña && <span className="text-rose-400 font-bold text-sm">❌ {errors.contraseña.message}</span>}
                </div>

                <div className="mb-4">
                <input
                    type="number"
                    {...register("edad", {
                    required: "Edad es requerida",
                    min: { value: 18, message: "Debes ser mayor de 18 años" },
                    })}
                    placeholder="Edad"
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.edad && <span className="text-rose-400 font-bold text-sm">❌ {errors.edad.message}</span>}
                </div>

                <div className="mb-4">
                <input
                    {...register("telefono", {
                    required: "Teléfono es requerido",
                    pattern: { value: /^[0-9]{10}$/, message: "Debe tener 10 dígitos" },
                    })}
                    placeholder="Teléfono"
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.telefono && <span className="text-rose-400 font-bold text-sm">❌ {errors.telefono.message}</span>}
                </div>

                <div className="mb-4">
                <select
                    {...register("pais", { required: "Selecciona un país" })}
                    className="w-full p-3 bg-teal-950 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                    <option value="">Selecciona un país</option>
                    <option value="México">México</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="España">España</option>
                </select>
                {errors.pais && <span className="text-rose-400 font-bold text-sm">❌ {errors.pais.message}</span>}
                </div>

                <div className="mb-4">
                <label className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    {...register("terminos", { required: "Debes aceptar los términos" })}
                    className="h-5 w-5 bg-teal-950"
                    />
                    <span>Acepto los términos y condiciones</span>
                </label>
                {errors.terminos && <span className="text-rose-400 font-bold text-sm">❌ {errors.terminos.message}</span>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
                    >
                       {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </div>
            </form>

            {mensaje && (
                <div className="bg-teal-100 border-l-4 border-teal-500 text-teal-800 p-2 m-4 flex" role="alert">
                <div className="flex-shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 12 2s10 4.477 10 10z"
                    />
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-lg">{mensaje}</p>
                    <p className="text-sm mt-1">Ahora puedes acceder a la web</p>
                </div>
                </div>
            )}

        </div>
    );
}

export default RegistroFormulario;
