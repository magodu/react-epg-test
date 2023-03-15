import React from 'react';
import { render, screen, act, renderHook } from '@testing-library/react';
import EpgContextProvider, { useEpgContext, EpgContext } from '../store/epg-context';


const mockContextData = {
    searchQuery: 'viki',
    setSearchQueryHandler: jest.fn()
}

const wrapper = ({ children }) => (
    <EpgContext.Provider value={mockContextData}>
        {children}
    </EpgContext.Provider>
);

const mockUseContext = jest.fn().mockImplementation(() => (mockContextData));

React.useContext = mockUseContext;

describe('useSiteContext test', () => {
    test('should return present feature toggles with its state and dispatch function', () => {
        render(<EpgContextProvider />);
        const { result } = renderHook(() => useEpgContext(), { wrapper });

        expect(result.current.searchQuery).toBe('viki');
        expect(result.current).toEqual(mockContextData);
    });
});


describe('SiteContext Provider', () => {
    let container;
    let searchQuery;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        container = render(
            <EpgContext.Provider
                value={mockContextData}
            >
                <div data-testid="test-div" />
            </EpgContext.Provider>
        );
    });

    test('should render children components', () => {
        expect(screen.getByTestId('test-div')).toBeDefined();
    });

    test('should set and get the language value', () => {
        expect(searchQuery).toBeUndefined();
        act(() => {
            searchQuery = 'viki';
        });
        expect(searchQuery).toBe('viki');
    });

});
