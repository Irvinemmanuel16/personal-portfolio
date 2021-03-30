import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home";
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}/> 
      </Switch>
    </Router>
  );
}

export default App;
