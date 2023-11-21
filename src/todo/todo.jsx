import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import './style.css'

export default function Todo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage);
    const [id, setid] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);

    const salvar = (e) => {
        e.preventDefault()
        setLista([...lista, {
            atividade: atividade, id: id
        },]);
        setid(id + 1)
        console.log(lista)
    };

    return (
        <div>
            <h1>lista de atividades</h1>
            <Link to="/">home</Link>
            <form onSubmit={salvar}>
                <input className="tutu"type="text"
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button className="buti">Encrementa</button>
            </form>

            {lista.map((ativ) =>
                <div key={ativ.id}>
                    <p>{ativ.id}</p>

                    <ul key={ativ.id}>
                <Link to={`/detalhe/${ativ.id}`}>
                <li>{ativ.aividade}</li>

                    <p>{ativ.atividade}</p>

                    </Link>
                </ul>

                </div>
            )
            }
        </div>
        
    )
}