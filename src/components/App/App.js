import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import MainPage from '../MainPage';
import PostPage from '../PostPage';

const propTypes = {
    history: PropTypes.object.isRequired,
};

const App = (props) => {
    const { history } = props;
    history.listen(() => window.scrollTo(0, 0));
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

App.propTypes = propTypes;

export default withRouter(App);
