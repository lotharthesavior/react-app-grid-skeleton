import React from 'react';
import Reflux from 'reflux';

import GridLayout from 'react-grid-layout';

import StorageHelper from '../../Helpers/StorageHelper';

class Dashboard extends Reflux.Component
{
    constructor(props)
    {
        const defaultLayout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 3, h: 2},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];

        super(props);

        this.localStorageKey = 'appDashboard-gSa56da';

        const existentLayout = StorageHelper.getFromLocalStorage(this.localStorageKey);

        this.state = {
            layout: (typeof existentLayout !== 'undefined') ? existentLayout : defaultLayout
        };
    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <GridLayout
                    className="layout"
                    layout={this.state.layout}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                    style={{margin: '0 auto', maxWidth: '1200px'}}
                    onLayoutChange={(layout) =>
                        StorageHelper.saveToLocalStorage(this.localStorageKey, layout)
                    }
                >
                    <div style={{background: '#000'}} key="a">a</div>
                    <div style={{background: 'blue'}} key="b">b</div>
                    <div style={{background: 'red'}} key="c">c</div>
                </GridLayout>
            </div>
        )
    }
};

export default Dashboard;