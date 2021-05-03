import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, inputName, setInputName }) =>{
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value); 
    };
    const inputNameHandler = (e) => {
      console.log(e.target.value);
      setInputName(e.target.value); 
  };
    const submitTodoHandler = (e)  => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed:false, id: Math.random()*100}
      ]); 
      setInputText("");
    };
    return(
    <form>
      
      <input placeholder="Enter your Name" value={inputName} onChange={inputNameHandler} type="text" className="name-input"/>
    
      <input placeholder="Enter To Do" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      
    </form>
    
    );
}


export default Form;