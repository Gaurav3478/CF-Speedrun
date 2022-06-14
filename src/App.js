import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Questions from './components/Questions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Questions/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
