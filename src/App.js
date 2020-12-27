import React from "react";
import './App.css';
import Header from './components/header/Header'
import Homepage from './components/homepage/HomepageMain'
import Community from './components/community/CommunityMain'
import Events from "./components/events/EventsMain";
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Switch>
              <Route path="/community">
                <Community />
              </Route>
              <Route path="/events">
                <Events/>
              </Route>
              <Route path="/">
                <Homepage/>
              </Route>
          </Switch>
        </main>
        <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
