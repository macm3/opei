import * as React from 'react';
import * as ReactDOM from 'react-dom';
import About from '.';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
});
