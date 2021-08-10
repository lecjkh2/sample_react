import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [dataA, dataChange] = useState(['useState Data1', 'useState Data2']);
  let [count, like] = useState(0);
  
  function changeData(){
    var newArray = [...dataA];
    newArray[0] = 'NewData1';
    dataChange(newArray);
  }

  return (
    <div className="App">
      <div className="Sample-react">
        <div> Sample React Page</div>
      </div>
      <botton onClick={ changeData }>botton</botton>
      <div className="list">
        <h3> { dataA[0] } <span onClick={ () => { like(count+1) } }>👍</span><span onClick={ () => { like(count-1) } }> 👎</span> { count } </h3>
        
        <p>2월 17일</p>
        <hr/>
      </div>

    </div>
  
  );
}

export default App;
