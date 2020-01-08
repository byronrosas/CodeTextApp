import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Home from './components/home';
import About from './components/about';
const App: React.FC = () => { 
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />                    
                </Switch>
            </BrowserRouter>
        </Provider>
       );  
}
export default App