import { Component } from 'react';


class Form extends Component{
   state={
    name: " ",
    tag: " ",
    experience:'junior',
    licence: false,
  };
  handleChange = event => {
    const {name,value} = event.currentTarget;
    this.setState({[name]:value})
     }
   
  handleSubmit=event=>{
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
  }
  reset=()=>{
    this.setState({
    name: " ",
    tag: " ",
      })
  }
  handleChangeCheckbox= event=>{
    this.setState({licence:event.currentTarget.checked})
  }
  render(){
     return(
        
        <form onSubmit={this.handleSubmit}>
        <label> Ім'я
        <input 
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
      </label>
      <label> Прізвище
        <input 
        type="text"
        name="tag"
        value={this.state.tag}
        onChange={this.handleChange}
        />
      </label>
      <button type="submit">Відправити</button> <br/>
      <p>Ваш рівень:</p>
      <label>
        <input
        type="radio"
        name="experience"
        value="junior"
        onChange={this.handleChange} 
        checked={this.state.experience==="junior"}
        />Junior
      </label>
      <label>
        <input
        type="radio"
        name="experience"
        value="senior"
        onChange={this.handleChange} 
        checked={this.state.experience==="senior"}
        />Senior
      </label>
      <label>
        <input
        type="radio"
        name="experience"
        value="middle"
        onChange={this.handleChange} 
        checked={this.state.experience==="middle"}
        />Middle
      </label> <br/>
    
      <label>
        <input 
        type="checkbox"
        name="licence" 
        onChange={this.handleChangeCheckbox}
        checked={this.state.licence}
        /> Згоден з умовами
      </label>
        <button type="submit" disabled={!this.state.licence}>Відправити</button> <br/>
      </form>)
  }    
}
export default Form;
   