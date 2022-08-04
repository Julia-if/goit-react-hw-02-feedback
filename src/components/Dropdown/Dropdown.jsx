import s from './Dropdown.module.css'
import  { Component } from "react";

class Dropdown extends Component{
     state={
            visible: false,
        }
        // show=()=>
        // this.setState({visible: true});
        // hide=()=>
        //     this.setState({visible: false})
          toggle = ()=>
            this.setState(prevState=>({
                visible:!prevState.visible,

            }) )
      
    render(){
       
        return(
            <div className={s.dropdown}>
                <button type="button" className={s.toggle} onClick={this.toggle}>
               {this.state.visible ?'Приховати': 'Показати'}</button>
                
               {this.state.visible && (<div className={s.menu}>Випадаюче меню</div>) } 
                

            </div>

        )
    }
}
export default Dropdown;