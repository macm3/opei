import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sponsors from '.';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sponsors />, div);
});
