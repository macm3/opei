import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import store from './shared/store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme();

ReactDOM.render(
    (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <Route component={App} />
                </Router>
            </MuiThemeProvider>
        </Provider>
    ),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
