import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from '../components/design/Navbar/Navbar'; 

describe('Navbar component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <Navbar />
            </Router>
        );

        afterEach(cleanup);

        test('should render Navbar component correctly', () => {
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

        test('Should navigate to "On demand" route on button click and set active class', async() => {
            renderComponent();
            const homeNavMenu = screen.getByTitle('Home');
            const guideNavMenu = screen.getByTitle('Guide');
            const ondemandNavMenu = screen.getByTitle('On demand');
            const watchAgainNavMenu = screen.getByTitle('Watch again');
            const favoritesNavMenu = screen.getByTitle('Favorites');

            expect(homeNavMenu).toBeInTheDocument();
            expect(guideNavMenu).toBeInTheDocument();
            expect(ondemandNavMenu).toBeInTheDocument();
            expect(watchAgainNavMenu).toBeInTheDocument();
            expect(favoritesNavMenu).toBeInTheDocument();

            const homeButtonEl = homeNavMenu.closest('a');
            const guideButtonEl = guideNavMenu.closest('a');
            const onDemandButtonEl = ondemandNavMenu.closest('a');
            const watchAgainButtonEl = watchAgainNavMenu.closest('a');
            const favoritesButtonEl = favoritesNavMenu.closest('a');

            fireEvent.click(ondemandNavMenu);

            //verify that class expanded is added to div with timeline-content class
            expect(onDemandButtonEl).toHaveClass('active');
            expect(homeButtonEl).not.toHaveClass('active');
            expect(guideButtonEl).not.toHaveClass('active');
            expect(watchAgainButtonEl).not.toHaveClass('active');
            expect(favoritesButtonEl).not.toHaveClass('active');
        });

});
