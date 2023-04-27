import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosaction";
import "../style/todo.css";
const Todos=()=>{
  const {isLoading,todos,error}=useSelector((state)=>state);
  const dispatch=useDispatch();
useEffect(()=>{
dispatch(getAllTodos())
},[])

    return(
        <div>
         {isLoading && <h3>Loading</h3>}
         {error && <h3>{error.message}</h3>}
         <section class="grid-container">
  {todos && todos.map((todo)=>{
    return <article key={todo.id} class="card">
      <h4 class="card-id">{todo.id}</h4>
      <h4 class="card-title">{todo.title}</h4>
    </article>
  })}
</section>
        </div>
    )
}
export default Todos;