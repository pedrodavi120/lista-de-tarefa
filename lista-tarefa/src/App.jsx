import { useState } from "react";
import "./App.css";
import Tarefa from "./componentes/Tarefa/Tarefa";
import Card from "./componentes/Tarefa/Card"
import ListaDeTarefas from "./componentes/ListadeTarefas/ListaDeTarefas";

function App() {
  const [count, setCount] = useState(0);
  let tarefas=["Pedro Davi", "Stênia Raquel", "José Vine"];

  return (
    <>
      <ListaDeTarefas>
        <ul>
        {tarefas.map((tarefa) => <Tarefa tarefa={tarefa}/>)}
        </ul>
      </ListaDeTarefas>
      <Card/>
    </>
  );
}

export default App;
