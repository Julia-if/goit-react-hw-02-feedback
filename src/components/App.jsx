import data from "./data.json"
import Counter from './Counter/Counter';
import ColorPicker from "./ColorPicker";
import Dropdown from "./Dropdown";
import { Component } from 'react';
import TodoList from './TodoList';
import Form from "./Form/Form";

const colorPickerOption=[
{label: 'red', color: '#F44336'},
{label: 'green', color: '#4CAF50'},
{label: 'blue', color: '#2196F3'},
{label: 'grey', color: '#607D8B'},
{label: 'pink', color: '#E91E63'},
{label: 'indigo', color: '#3F51B5'},
]

class App extends Component {
  state={
    todos: data,
    // name: " ",
    // tag: " ",
  };
  deleteTodo = todoId =>{
    this.setState(prevState=>(
      {
        todos: prevState.todos.filter(todo=>todo.id!==todoId),
      }
    ))
  }
  toggleCompleated = todoId => {
    this.setState(prevState=>({
todos: prevState.todos.map(todo=>{
 if (todo.id === todoId){
      return {
        ...todo, completed: !todo.completed,
      }
    }
    return todo;
    })
    }))
    
   
  }
  formSubmitHandler=data=>{
    console.log(data);
  }
  
  render(){
    const {todos} = this.state;
    const comletedTodos = todos.reduce(
      (total, todo)=>(todo.completed ? total+1: total),0,
    )
    return( 
      
    // <Form onSubmit={this.formSubmitHandler}/>)
      
    <>
     <h1>Стан компонента</h1>
    // <Counter inatialValue={10} />
    // <Dropdown />
    // <ColorPicker options={colorPickerOption} />
    <div>
      <span>Загальна кількість:{todos.length}</span>
      <span>Кількість виконаних:{comletedTodos}</span>
    </div>
    <TodoList  todos={todos} onDeleteTodo={this.deleteTodo} onToggleComleted={this.toggleCompleated}/> 
    </>)
    }
}

// export const App = () => {
//   return (
//     <>
//     <h1>Стан компонента</h1>
//     <Counter inatialValue={10} />
//     <Dropdown />
//     <ColorPicker options={colorPickerOption} />
//     </>
//   );
// };
 export default App;