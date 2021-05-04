import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Hello from './components/hello'

function App() {
  const [title,setTitle]  =  useState(1)
  return (
    <div className="App">
      {/* <button onClick={() =>{
        let a = title + 1
        setTitle(a)
      }}>点击我</button>
      <Hello title={title}></Hello> */}

      
    </div> 
    
  );
}

export default App;


// react 16  与之前  生命周期变化

// hook 
// hook 
// 单项链表 