//import './App.css';
import Register from './Authentication/Register';
import {BrowserRouter,Route, Switch,useLocation} from 'react-router-dom';
import Login from './Authentication/Login';
import Info from './content/Info';
import Nav from './content/Nav';
import Summary from './content/Summary';
import Map from './content/Map';
import Status from './content/Status';
import Navigation from './content/Navigation';
import contact from './content/contect';
import  {motion,AnimatePresence} from 'framer-motion';
const App=()=>{
  const location=useLocation();
  return (
    <>
    <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login}/>
          <Route path="/" exact component={Login}/>
          <Route path="/info" exact component={Info}/>
          <Route path="/nav" exact component={Nav}/>
          <Route path="/summary" exact component={Summary}/>
          <Route path="/status" exact component={Status}/>
          <Route path="/covidmap" exact component={Map}/>
          <Route path="/navigate" exact component={Navigation}/>
          <Route path='/contact' exact component={contact}/>
        </Switch>
    </AnimatePresence>
      {/* <Register />
      <Login /> */}
    </>
  );
}
export default App;