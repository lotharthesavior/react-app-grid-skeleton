import React from 'react';
import Reflux from 'reflux';
import NavigationActions from '../Navigation/Actions/NavigationActions';
import StorageHelper from "../../Helpers/StorageHelper";

import './Navigation.css';

/**
 * Navigation has the purpose of triggering the navigation
 *
 * Observatino: there was an attempt to put this at the Router,
 *              but at that moment the Reflux Actions was not
 *              loded.
 */
class Navigation extends Reflux.Component
{
    constructor(props)
    {
        super(props);

        this.localStorageKey = 'appNavigation-gSa56da';

        const existentNavigation = StorageHelper.getFromLocalStorage(this.localStorageKey);

        this.state = {};

        if (typeof existentNavigation !== 'undefined') {
            this.navigateTo(existentNavigation);
        }
    }

    /**
     * Call Actions
     *
     * @param page
     *
     * @return void
     */
    navigateTo(page) {
        StorageHelper.saveToLocalStorage(this.localStorageKey, page);

        switch (page) {
            case 'notes':
                return NavigationActions.goNotes();
                break;

            default: // dashboard
                return NavigationActions.goDashboard();
                break;
        }
    }

    render () {
        return (
            <div>
                <ul className="menu">
                    <li className={this.state.page === 'dashboard' ? 'selected' : ''}>
                        <a href="#">Home</a>
                    </li>

                    <li className={this.state.page === 'notes' ? 'selected' : ''}>
                        <a href="#notes">Notes</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;