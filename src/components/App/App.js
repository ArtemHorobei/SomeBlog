import './App.scss';
import { Switch, Route  } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainPage from '../../components/MainPage';
import PostPage from '../../components/PostPage';
import React from 'react';
import { withRouter } from 'react-router-dom';

const App = (props) => {
    props.history.listen((history) => window.scrollTo(0, 0));
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

export default withRouter(App);
