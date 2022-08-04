import s from './TodoList.module.css';
const TodoList = ({todos, onDeleteTodo, onToggleComleted})=>
<ul className={s.todolist}>
    {todos.map(({id, text, completed})=><li key={id} className={s.item}>
        <input type="checkbox"
        checked={completed}
        onChange={()=>onToggleComleted(id)}
        />
        <p className={s.text}>{text}</p>
        <button
        onClick={()=>{onDeleteTodo(id)}}
        >Видалити</button>
    </li>)}
</ul>

export default TodoList;