import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <div className='background'>
        <Navigation></Navigation>
        <Home></Home>
      </div>
    </React.Fragment>
  );
}

export default App;
