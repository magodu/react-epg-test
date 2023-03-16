import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../components/design/Footer/Footer'; 

describe('Footer component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <Footer />
            </Router>
        );

        afterEach(cleanup);

        test('should render Footer component correctly. checkin if Navbar chil component is there', () => {
            renderComponent();
    
            const navMenu1 = screen.getByTitle('Home');
            const navMenu2 = screen.getByTitle('On demand');
            const navMenu3 = screen.getByTitle('Guide');
            const navMenu4 = screen.getByTitle('Watch again');
            const navMenu5 = screen.getByTitle('Favorites');
    
            expect(navMenu1).toBeInTheDocument();
            expect(navMenu2).toBeInTheDocument();
            expect(navMenu3).toBeInTheDocument();
            expect(navMenu4).toBeInTheDocument();
            expect(navMenu5).toBeInTheDocument();
        });

});
