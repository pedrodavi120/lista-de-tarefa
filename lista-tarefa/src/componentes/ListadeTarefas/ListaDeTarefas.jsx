import Tarefa from "../Tarefa/Tarefa";
import "./ListaDeTarefas.css"

function ListaDeTarefas(props) {
    return(
        <figure className="bannerTarefa">
            <h1 className="tituloTarefa">Lista de Tarefas</h1>
            {props.children}
        </figure>
    )
}
export default ListaDeTarefas;