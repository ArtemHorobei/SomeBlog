import './App.scss';
import { Switch, Route  } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HelpPage from '../../components/HelpPage';
import MainPage from '../../components/MainPage';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/help' component={HelpPage}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;
