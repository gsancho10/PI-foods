import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Detail from './components/Detail'
import CreateRecipe from './components/CreateRecipe'
import About from './components/About'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry food APP</h1>
      <Switch>
        <Route exact path= '/' component={LandingPage} />
        <Route path= '/home' component={Home} />
        <Route exact path="/recipe/:id" component={Detail} />
        <Route path="/create/recipe" component={CreateRecipe} />
        <Route exact path="/about" component={About} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
