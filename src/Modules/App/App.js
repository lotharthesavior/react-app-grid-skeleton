import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import NavigationStore from '../Navigation/Stores/NavigationStore';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Notes from '../../Components/Notes/Notes';
import Navigation from '../Navigation/Navigation';
import Router from '../Router/Router';

import './App.css';

class App extends Reflux.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        this.store = NavigationStore;

        new Router();
    }

    render () {
        var page;

        switch (this.state.page) {
            case 'notes':
                page = (<Notes />);
                break;
            default:
                page = (<Dashboard />);
                break;
        }

        return (
            <div className="app-width center">
                <h2 className="text-center">
                    {this.props.pageTitle}
                </h2>

                <div className="cleaner" />

                <Navigation />

                <div className="cleaner" />

                {page}
            </div>
        )
    }
};

App.propTypes = {
    pageTitle: PropTypes.string.isRequired
};

App.defaultProps = {
    pageTitle: 'Grid-App-Skeleton'
};

export default App;