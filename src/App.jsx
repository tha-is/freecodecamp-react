import { useState } from "react";
import Exercise01 from "./exercises/exercise01.jsx";
import Exercise02 from "./exercises/exercise02.jsx";
import Exercise03 from "./exercises/exercise03.jsx";


export default function App() {

  const [exercicio, setExercicio] = useState(null);

  const exercises = [
    { id: 1, component: <Exercise01 /> },
    { id: 2, component: <Exercise02 /> },
    { id: 3, component: <Exercise03 /> }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* NAV */}
      <nav className="navbar justify-content-center gap-2 p-3">
        {exercises.map((ex) => (
          <button key={ex.id} onClick={() => setExercicio(ex.id)}>
            Exerc. {ex.id}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="w-50 d-flex flex-column gap-3">
          {exercises.find(ex => ex.id === exercicio)?.component}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center p-4">
        <div className="badge text-wrap" id="box-warn">
          Ambiente de teste ☕
        </div>
      </footer>

    </div>
  );
}