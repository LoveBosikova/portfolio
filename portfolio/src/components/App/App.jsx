import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Me from '../Me/Me';
import Portfolio from '../Portfolio/Portfolio';

export default class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <About />
                    <Me />
                    <Portfolio />
                </main>
            </>
        )
    }
}