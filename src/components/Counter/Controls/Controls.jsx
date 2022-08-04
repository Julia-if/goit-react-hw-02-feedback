 import s from './Controls.module.css'

 const Controls = ({onIncrement, onDecrement})=>(<div className ={s.controls} >
            <button type = "button" className ={s.button} onClick={onIncrement}> Збільшити на 1 </button> 
            <button type = "button" className ={s.button} onClick={onDecrement}> Зменшити на 1 </button> 
            </div>);
  export default Controls;


