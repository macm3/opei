import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Contact from '.';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
});
