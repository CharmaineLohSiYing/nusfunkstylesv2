import './App.css';
import Header from './components/header/Header'
import Homepage from './components/homepage/HomepageMain'
import Community from './components/community/CommunityMain'
import Events from "./components/events/EventsMain";
import ContactMain from "./components/contact/ContactMain";
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
          </main>
          <Footer/>
          <Filler/>
        </div>
    </Router>
    
  );
}

export default App;
