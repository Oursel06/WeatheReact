import React, { useState } from 'react';
import Searchcity from './component/Searchcity'
import './style/style.css';
import Meteocity from './component/Meteocity';

const App = () => {

  const [nameSelect] = useState("Antibes");

  return (
    <div>
      {/* <Searchcity /> */}
      <Meteocity name={nameSelect} />
    </div>
  );
};

export default App;