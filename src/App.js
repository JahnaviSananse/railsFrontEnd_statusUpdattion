import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Update_task from './components/Update_task';
import View_task from './components/View_task';
import EnhancedTableHead from './components/EnhancedTableHead';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path = "/" render = {()=><Update_task/>}/>
        <Route exact path = "/temp" render = {()=><EnhancedTableHead/>}/>
        <Route exact path = "/view" render = {()=><View_task/>}/>

      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
