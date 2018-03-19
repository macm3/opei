import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ViewPager from '.';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ViewPager index={0} />, div);
});