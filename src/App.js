import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <div className='background'>
        <Navigation></Navigation>
      </div>
    </React.Fragment>
  );
}

export default App;
