import { useEffect, useState } from "react";
import '../App.css'

export default function Exercise04 () {

    const [titulo, setTitulo] = useState("Clique em 'Gerar código'");
    const [segundos, setSegundos] = useState(0)
    
    const handleClick = () => {
        const codigo = Math.floor(100000 + Math.random() * 900000); // gera um numero aleatorio de 6 digitos
        setTitulo(codigo) // muda o h2 para o codigo acima
        setSegundos(5) // define os segundos a partir do momento que clica no botão para evitar acionamento do useEffect no backend
    }

    useEffect(() => {
        if (segundos === 0) return; // trava a execução ao chegar em 0

        const timer = 
        setInterval(() => { 
            setSegundos((prev) => {
                if (prev <= 1) { 
                    clearInterval(timer) 
                    return 0
                }
            return prev - 1})
        }, 1000);
        return () => clearInterval(timer)
    }, [segundos]);
    
    return (
    <div className="d-flex flex-column align-items-center pt-2 text-secondary">
        <h3>Gerador de códigos</h3>
        <h4 className="text-light">{titulo}</h4>
        <p>
            {segundos > 0 && `Seu código expira em ${segundos}`}
            {segundos === 0 && titulo !== "Clique em 'Gerar código'" && `Seu código expirou, clique novamente em 'Gerar código'`}
        </p>
        {segundos > 0 && <button onClick={handleClick} disabled>Gerar código</button>}
        {segundos === 0 && <button onClick={handleClick}>Gerar código</button>}
    </div>)
}