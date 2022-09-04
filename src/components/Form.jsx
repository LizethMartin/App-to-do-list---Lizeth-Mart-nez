import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
    const [titulo, setTitulo] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [error, setError] = useState(false);


    useEffect(() => {
        if (Object.keys(tarea).length > 0) {
            setTitulo(tarea.titulo)
            setFecha(tarea.fecha)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea])

    const generarId = () => {
        const id = Math.random().toString(20).substr(2)
        return id;
    };

    //Validación formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([titulo, fecha, descripcion].includes('')) {
            setError(true)
            return;
        }

        setError(false);

        //Objeto tareas
        const objetoTareas = {
            titulo,
            fecha,
            descripcion,
        }

        if (tarea.id) {
            //Editando la tarea

            objetoTareas.id = tarea.id;

            const tareasActualizadas = tareas.map(tareaState =>
                tareaState.id === tarea.id ? objetoTareas : tareaState
            );

            setTareas(tareasActualizadas);
            setTarea({});

        } else {
            //Nueva tarea
            objetoTareas.id = generarId();
            setTareas([...tareas, objetoTareas]);
        }

        //Limpiar nuestro formulario
        setTitulo('');
        setFecha('');
        setDescripcion('');

    }

    return (
        <div className="md:w-1/2 lg:w-2/4 mx-5">
            <h2 className="font-bold text-center text-3xl mb-10">Creación de tareas</h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
                {error && <AlertError>Faltan campos por diligenciar!</AlertError>}
                <div className="mb-5">
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-semibold">Titulo</label>
                    <input
                        id="titulo"
                        type="text"
                        placeholder="Titulo de la tarea"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-semibold">Fecha</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="descripcion" className="block text-gray-700 uppercase font-semibold">Descripción</label>
                    <textarea
                        id="descripcion"
                        type="text"
                        placeholder="Descripción de la tarea"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                {!tarea.id ? (
                    <input
                        type="submit"
                        className="bg-blue-600 w-full p-3  text-white uppercase font-semibold rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
                        value="Crear Tarea"
                    />
                ) : (
                    <input
                        type="submit"
                        className="bg-yellow-400 w-full p-3  uppercase font-semibold rounded-md hover:bg-yellow-500 transition-colors cursor-pointer"
                        value="Actualizar Tarea"
                    />
                )}
            </form>
        </div>
    )
}

export default Form;
