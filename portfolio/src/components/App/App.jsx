import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';

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
                </main>
            </>
        )
    }
}