import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home/Home";
import NoteIt from './NoteIt'
import TextIt from './TextIt'
import ShoppingIt from './ShoppingIt'
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/noteIt' exact component={NoteIt}/>
        <Route path='/textIt' exact component={TextIt}/>
        <Route path='/shoppingIt' exact component={ShoppingIt}/>
      </Switch>
    </Router>
  );
}

export default App;
