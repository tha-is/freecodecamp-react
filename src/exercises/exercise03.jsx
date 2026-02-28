import { useEffect, useState } from "react";
import '../App.css'

function Exercise03 () {
    const [query, setQuery] = useState('');
    const [resultados, setResultados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (query.trim() === '') {
            setResultados([]);
            setIsLoading(false)
            return;
        } 
        // se o termo de busca (query) for vazio ele limpa os resultados da tela. 
        // trim() para limpar espaços vazios
        const timeoutId = setTimeout(async () => {
            try {
                setIsLoading(true);
                
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${query}`
                );
                if (!response.ok) {
                    setResultados([]);
                    return;
                }
                const data = await response.json();
                setResultados(data);
            } 
            // busca o endereço da API e acrescenta o termo de busca no final do link
            // setResultados renderiza cada item do array que tenha o termo de busca encontrado (query)
            catch (error) {
                console.error("Erro buscando dados:", error);
                setResultados([]);
            }
            finally {
                setIsLoading(false);
            }
        }, 700); // servidor só faz a busca se parar de digitar por 700ms 
        return () => clearTimeout(timeoutId);
        }
        ,[query] // indica qual objeto sofrerá o efeito toda vez que for acionado
    )

    return (
        <div className="d-flex flex-column align-items-center pt-2">
            <form onSubmit={handleSubmit}>
            <input 
            type="search"
            name="country"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            className="form-control" 
            placeholder="Digite um país... Ex.: Brazil" 
            />
            </form>
                { isLoading ? (<div className="spinner-grow mt-4" role="status"></div>
                ) : resultados.length > 0 ? (
                    <div className="d-flex flex-column overflow-auto border p-0 mt-4 small" style={{ maxHeight: '300px', width: '75%' }}> 
                    {resultados.map(country => (
                    <div key={country.cca3}>
                        <p className="m-0 p-2 text-center text-light">{country.name.common}
                            <img 
                                src={country.flags.png} 
                                alt={`Bandeira de ${country.name.common}`} 
                                width="25"
                                className="ms-2" />
                        </p>
                        </div> 
                        ))}
                        </div>
                )
                : (
                <p>Nenhum resultado encontrado.</p> 
                )}
            </div>
                    )
}

export default Exercise03