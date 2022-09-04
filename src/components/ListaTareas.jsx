import { useEffect } from "react";
import Tareas from "./tareas";

const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {
    return (
        <div className="md:w-1/2 lg:w-2/4 mx-5 md:h-screen overflow-scroll">

            {tareas && tareas.length ? (
                <>
                    <h2 className="font-bold text-center text-3xl mb-10">Mis tareas pendientes</h2>
                    {tareas.map((tarea) => {
                        return (
                            <Tareas
                                key={tarea.id}
                                tarea={tarea}
                                setTarea={setTarea}
                                eliminarTarea={eliminarTarea}
                            />
                        )
                    })}
                </>
            ) : (
                <h2 className="font-bold text-center text-3xl mb-10">No tengo tareas pendientes</h2>
            )}
        </div>
    );
};

export default ListaTareas;