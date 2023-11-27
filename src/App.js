import React from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import Button from './components/Button';
import './style.css';
import CounterComponent from './components/CounterComponent';
const App= () =>  {
  return (
    <div className='todo-container'>
      <CounterComponent/>
      <Header title="Todoie-App"/>
      <TodoItems text="eat"/>
      <TodoItems text="run"/>
      <TodoItems  completed={true} text="dance"/>
      <TodoItems text="code"/>
      <TodoItems text="sleep again"/>
      <Button/>

    </div>
  );
}

export default App;
