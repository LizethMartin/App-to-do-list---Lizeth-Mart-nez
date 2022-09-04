import { useEffect } from "react";

const Tareas = ({ tarea, setTarea, eliminarTarea }) => {
    const { titulo, descripcion, fecha, id } = tarea;

    const handleEliminar = () => {
        const respuesta = confirm('¿Desea eliminar está tarea?')
        if (respuesta) {
            eliminarTarea(id)
        }
    }
    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
            <p className="font-semibold mb-3 text-gray-700 uppercase">
                Titulo:{' '}
                <span className="font-normal normal-case">{titulo}</span>
            </p>
            <p className="font-semibold mb-3 text-gray-700 uppercase">
                Fecha:{' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-semibold mb-3 text-gray-700 uppercase">
                Descripción:{' '}
                <span className="font-normal normal-case">{descripcion}</span>
            </p>

            <div className="flex justify-between">
                <button
                    className="bg-yellow-400 hover:bg-yellow-500 mt-4 py-2 px-10 rounded-md transition-colors font-bold"
                    type="button"
                    onClick={() => setTarea(tarea)}
                >
                    Actualizar
                </button>
                <button
                    className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md transition-colors text-white font-bold"
                    type="button"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    );
};

export default Tareas;