import s from './Counter.module.css'
import  { Component } from "react";
import Controls from './Controls/Controls'
import Value from './Controls/Value/Value';


class Counter extends Component {
    static defaultProps ={
        inatialValue:0
    }
    state={
      value:  this.props.inatialValue,
    }


    handleIncrement=()=>{
         this.setState((
           prevState)=>{
            return {
                value: prevState.value+1
            }
           }
         )
        }
          handleDecrement=()=>{
         
         this.setState((prevState)=>{
            return{
                value: prevState.value-1
            }
         })}
    
    render() {
        return ( <div className={s.counter}>
            <Value value={this.state.value} />
            
            <Controls
             onIncrement={this.handleIncrement}
             onDecrement={this.handleDecrement} />
            </div>  
        )
    }
}



export default Counter;