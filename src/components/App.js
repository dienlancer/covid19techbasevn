import React, {Component} from 'react';
import FormSearch from "./../components/FormSearch";
import Notification from "./../components/Notification";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import routes from './../route-config';
class App extends Component {    
  render(){         
    return (
      <Router>
        <div className="container">		
        <div className="row">
          <div className="col">	                    
          <FormSearch />          
          <Notification />
        {this.showRoute(routes)}
        </div>
        </div>
        </div>
      </Router>    
    );
  }
  showRoute(routes){
    let xhtml=null;
    if(routes.length > 0){
      xhtml=routes.map((route,index)=>{
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }
    return  <Switch>{xhtml}</Switch>;
  }   
}


export default App;