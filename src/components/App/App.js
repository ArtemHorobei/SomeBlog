import './App.scss';
import { Switch, Route  } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PostPage from '../../components/PostPage';
import MainPage from '../../components/MainPage';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/post/:id' component={PostPage}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;
