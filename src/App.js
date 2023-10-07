import React,{useState} from 'react';
import './App.css';
import WorldClocks from './components/WorldClocks';
// import 
function App() {
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count===0){
setCount(0)
    }
    else{
    setCount(count-1)
    }
  }
  function reset(){
    setCount(0)
  }
  return (
    <div className="App">
      <h1>Count </h1>
<div>
<button onClick={increment}>
  increment 
</button>
<button onClick={decrement}>
  decrement
</button>
<button onClick={reset} disabled={count === 0}>
  reset
</button>
<div>
  
  count is {count}
</div>

</div>
      <WorldClocks />
    </div>
  );
}

export default App;
