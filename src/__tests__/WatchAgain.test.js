import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WatchAgain from '../pages/WatchAgain/WatchAgain';

describe('WatchAgain component', () => {
    const renderComponent = () => render(<Router><WatchAgain /></Router>);

    afterEach(cleanup);

    test('should render WatchAgain component correctly', async () => {
        renderComponent();
        expect(screen.getByText('Watch again')).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    });

});
