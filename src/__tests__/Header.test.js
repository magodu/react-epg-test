import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Header from '../components/design/Header/Header';
import { EpgContext } from '../store/epg-context';

import noriginMediaLogo from '../assets/images/norigin-media-logo.png';

describe('Header component', () => {

    const renderComponent = () => render(<Header />);

    function renderComponentWithContext() {
        return render(
            <EpgContext.Provider
                value={{
                    searchQuery: '',
                    setSearchQueryHandler: jest.fn()
                }}
            >
                <Header />
            </EpgContext.Provider>
        );
    }

    afterEach(cleanup);

    test('alt contains correct value', () => {
        renderComponent();
        const testImage = document.querySelector('img');
        expect(testImage.alt).toContain('Norigin Media Logo');
    });

    test('src contains correct value', () => {
        renderComponent();
        const testImage = document.querySelector('img');
        expect(testImage.src).toContain(noriginMediaLogo);
    });

    test('Header component should contains two icons', () => {
        renderComponent();
        expect(screen.getByTitle('User Menu')).toBeInTheDocument();
        expect(screen.getByTitle('Search')).toBeInTheDocument();
    });

    test('renders form input', () => {
        renderComponent();
        const searchInput = screen.getByPlaceholderText('Type here for search...');
        expect(searchInput).toBeInTheDocument();
    });

    test('submitting the form', async () => {
       // const submitHandler = jest.fn();
        const setSearchQueryHandler = jest.fn();
        renderComponentWithContext();

        const sendFormSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({ json: jest.fn() });
        const searchInput = screen.getByPlaceholderText('Type here for search...');

        await userEvent.type(searchInput, 'viking');
        fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });

        //await expect(setSearchQueryHandler).toHaveBeenCalled();

        sendFormSpy.mockRestore();
    });

});
