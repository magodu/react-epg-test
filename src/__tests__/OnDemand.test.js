import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import OnDemand from '../pages/OnDemand/OnDemand';

describe('OnDemand component', () => {
    const renderComponent = () => render(<Router><OnDemand /></Router>);

    afterEach(cleanup);

    test('should render OnDemand component correctly', async () => {
        renderComponent();
        expect(screen.getByText('Video on demand')).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    });

});
