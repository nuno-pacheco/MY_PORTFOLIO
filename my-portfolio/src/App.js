import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Work1 from './screens/Work1';
import Work2 from './screens/Work2';
import Work3 from './screens/Work3';
import Work4 from './screens/Work4';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/work1" component={Work1} exact></Route>
      <Route path="/work2" component={Work2} exact></Route>
      <Route path="/work3" component={Work3} exact></Route>
      <Route path="/work4" component={Work4} exact></Route>
      </div>
    </BrowserRouter>

  );
}

export default App;
