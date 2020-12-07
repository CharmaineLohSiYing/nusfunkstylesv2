import './App.css';
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Homepage/>
      </main>
    </div>
  );
}

export default App;
