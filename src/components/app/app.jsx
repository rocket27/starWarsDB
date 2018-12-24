import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';

const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <RandomPlanet />

            <div className="app-content">
                <div className="app-content-column app-content-column--left">
                    <ItemList />
                </div>
                <div className="app-content-column app-content-column--right">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;