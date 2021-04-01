import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home/Home";
import NoteIt from './NoteIt'
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/noteIt' exact component={NoteIt}/> 
      </Switch>
    </Router>
  );
}

export default App;
