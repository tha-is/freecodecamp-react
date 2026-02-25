import { useState } from 'react'
import '../App.css'

function Exercise01() {
  const [visivel, setVisivel] = useState(false)

  const handleVisibilidade = () => {
    setVisivel(!visivel);
    console.log(visivel)
  }

  return (
    <>
    <button onClick={handleVisibilidade}>Mensagem</button>
      {visivel && <p>
        O useState do React está declarado como false e
        ao clicar no botão o estado vai alternando (!) entre true/false.</p>}
    </>
  )
}

export default Exercise01
