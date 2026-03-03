import { useState } from "react";

class Tarea {
    constructor(id, texto, completada) {
        this.id = id;
        this.texto = texto;
        this.completada = completada;
    }
}

export default function ToDoList() {
    const [tareas, setTareas] = useState([]);           // ✅ Lista de tareas
    const [texto, setTexto] = useState("");             // ✅ Texto del input

    const agregarTarea = () => {
        let actId;

        if (tareas.length === 0) {
            actId = 1;
        } else {
            actId = tareas[tareas.length - 1].id + 1;
        }

        if (texto.length === 0) {
            alert("Agrega una tarea para comenzar tu lista");
            return;
        }

        const nuevaTarea = new Tarea(actId, texto, false);
        setTareas([...tareas, nuevaTarea]);
        setTexto("");
    };

    const toggleCompletada = (id) => {
        setTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return new Tarea(tarea.id, tarea.texto, !tarea.completada);
                } else {
                    return tarea;
                }
            })
        );
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    const completadas = tareas.filter((tarea) => tarea.completada).length;
    const pendientes = tareas.length - completadas;

    return (
        <div className="card">
            <h1>📋 Mi Lista de Tareas</h1>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="¿Qué necesitas hacer hoy?"
                onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
            />
            <button onClick={agregarTarea} className="agregar">
                ✨ Agregar Tarea
            </button>
            {tareas.length === 0 ? (
                <p style={{ color: '#C18D17', fontSize: '1.1rem', margin: '2rem 0' }}>
                    📝 ¡Agrega tu primera tarea!
                </p>
            ) : (
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <p>📌 {tarea.texto}</p>
                            <p>ID: {tarea.id}</p>
                            <button onClick={() => eliminarTarea(tarea.id)} className="eliminar">
                                🗑️ Eliminar
                            </button>
                            <label>✓ Completar:</label>
                            <input
                                type="checkbox"
                                checked={tarea.completada}
                                onChange={() => toggleCompletada(tarea.id)}
                            />
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
            <div className="resumen">
                <p>📊 Total de tareas: {tareas.length}</p>
                <p>✅ Tareas completadas: {completadas}</p>
                <p>⏳ Tareas pendientes: {pendientes}</p>
            </div>
        </div>
    );

}