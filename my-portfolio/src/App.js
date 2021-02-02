import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutMe from './components/AboutMe';
import AboutMyWork from './components/AboutMyWork';
import Curriculum from './screens/Curriculum';
import ScrollToTop from './components/ScrollToTop';
import Work1 from './screens/Work1';
import Work2 from './screens/Work2';
import Work3 from './screens/Work3';
import Work4 from './screens/Work4';

function App() {
  return (
    <BrowserRouter>
      
      <div>
      <Switch>
      <ScrollToTop>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/aboutme" component={AboutMe} exact></Route>
      <Route path="/aboutmywork" component={AboutMyWork} exact></Route>
      <Route path="/work1" component={Work1} exact></Route>
      <Route path="/work2" component={Work2} exact></Route>
      <Route path="/work3" component={Work3} exact></Route>
      <Route path="/work4" component={Work4} exact></Route>
      <Route path="/curriculum" component={Curriculum} exact></Route>
      </ScrollToTop>
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
