import './App.css';
import React from 'react';
import Classprops from './Classprops';
import Functionalprops from './Functionalprops';

class App extends React.Component {
  render() {
    return (
      <div><Classprops name="Hammad" place="Rawalpindi">
        <p>Child Component</p>
      </Classprops>
      <Classprops name="Hammad Ul Hassan" place="Rawalpindi">
        <button>Click</button>
      </Classprops>
      <Classprops name="Hammad Ul Hassan Qureshi" place="Rawalpindi"/>
      {/* <Functionalprops name= "Hammad Qureshi" place="Rawalpindi"/> {" "} */}
      </div>
      )
  }
}

export default App;
