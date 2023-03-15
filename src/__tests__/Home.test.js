import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/Home/Home';

describe('Home component', () => {
    const renderComponent = () => render(<Router><Home /></Router>);

    afterEach(cleanup);

    test('should render Home component correctly', async () => {
        renderComponent();
        expect(screen.getByText('Norigin Media EPG')).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    });

});
