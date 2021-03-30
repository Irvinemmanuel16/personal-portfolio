import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Home from "./Home";
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={Home}/> 
      </Switch>
    </Router>
  );
}

export default App;
