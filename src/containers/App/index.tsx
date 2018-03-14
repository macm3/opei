import * as React from 'react';
import './index.css';

const logo = require('../../assets/logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <p className="App-intro">
                    Em Construção
                </p>
            </div>
        );
    }
}

export default App;
