import { useParams } from "react-router-dom";
import Card from "..componentes/Card"

export default function (){

    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const atuvudade = lista.filter( (ativ) => {
        if(ativ.id == id){
            return ativ;
        }
        return null;
    })

    console.log(atividade);

    return(
       <Card atividade={atividade[0]}/>
    );
}