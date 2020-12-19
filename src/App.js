import './App.css';
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Homepage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
