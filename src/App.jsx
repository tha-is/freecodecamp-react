import { useState } from "react";
import Exercise01 from "./exercises/exercise01.jsx";
import Exercise02 from "./exercises/exercise02.jsx";


export default function App() {

  const [menu, setMenu] = useState(false);
  const [exercicio, setExercicio] = useState(null);

  const exercises = [
    { id: 1, component: <Exercise01 /> },
    { id: 2, component: <Exercise02 /> }
  ]

  return (
    <>
    <div className="container text-center flex-fill vw-100 vh-100 bg-dark">
    <nav className="navbar justify-content-start gap-2 p-3">
      {exercises.map((ex) => ( 
      <button key={ex.id} onClick={() => setExercicio(ex.id)}>
        Exerc. {ex.id} </button>
      ))}
      <div id="box-warn" className="badge text-wrap ms-auto" style={{width: '6rem'}}>Ambiente de teste <i class="bi bi-cup-hot-fill"></i></div>
    </nav> 
    
{exercises.find(ex => ex.id === exercicio)?.component}

  </div>
  </>
  )
}