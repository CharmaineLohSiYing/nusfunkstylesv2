import './App.css';
import React, { Suspense, lazy } from 'react';
import Header from './components/header/Header'
import Homepage from './components/homepage/HomepageMain'
const Community = lazy(() => import('./components/community/CommunityMain'));
const Events = lazy(() => import('./components/events/EventsMain'));
const ContactMain = lazy(() => import('./components/contact/ContactMain'));
import Footer from './components/footer/Footer'
import Filler from './components/Filler'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
          <header>
            <Header/>
          </header>
          <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                  <Route path="/home">
                    <Homepage/>
                  </Route>
                  <Route path="/community">
                    <Community />
                  </Route>
                  <Route path="/events">
                    <Events/>
                  </Route>
                  <Route path="/contact">
                    <ContactMain/>
                  </Route>
                  <Route path="/">
                    <Redirect to="/home" />
                  </Route>
              </Switch>
          </Suspense>
          </main>
          <Footer/>
          <Filler/>
        </div>
    </Router>
    
  );
}

export default App;
