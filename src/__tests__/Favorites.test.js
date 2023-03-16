import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, act, waitFor, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useFetch from '../hooks/useFetch';

import Favorites from '../pages/Favorites/Favorites';

const mockData = {
    channels: [
        {
            id: 'channel1',
            title: 'Channel 1',
            images: {
                logo: 'http://www.test.es/dummy-image.png',
            },
            schedules: [
                {
                    title: 'title1',
                    id: 'dummy_program_id_0',
                    start: '2023-03-15T00:00:00+01:00',
                    end: '2023-03-15T00:20:00+01:00',
                },
            ],
        },
        {
            id: 'channel2',
            title: 'Channel 2',
            images: {
                logo: 'http://www.test.es/dummy-image.png',
            },
            schedules: [
                {
                    title: 'title2',
                    id: 'dummy_program_id_1',
                    start: '2023-03-15T00:00:00+01:00',
                    end: '2023-03-15T00:20:00+01:00',
                },
            ],
        },
    ],
};

const mockFavorites = [
    {
        id: 'channel2',
        title: 'Channel 2',
        images: {
            logo: 'http://www.test.es/dummy-image.png',
        },
        schedules: [
            {
                title: 'title2',
                id: 'dummy_program_id_1',
                start: '2023-03-15T00:00:00+01:00',
                end: '2023-03-15T00:20:00+01:00',
            },
        ],
    },
];

const mockFilteredData = {
    channels: [
        {
            id: 'channel2',
        },
    ],
};

window.HTMLElement.prototype.scrollTo = jest.fn();

describe('Favorites component', () => {
    const renderComponent = () =>
        render(
            <Router>
                <Favorites data={mockFavorites} />
            </Router>
        );

    afterEach(cleanup);

    test('should call useFetch hook and get data to the url "/epg" on mount', async () => {
        let hook;
        await act(async () => {
            hook = renderHook(() => useFetch('/epg'));
        });
        const { result } = hook;

        renderComponent();

        await waitFor(() => {
            expect(result.current.response).toEqual('');
        });
    });

    test('should call useFetch hook and get data to the url "/favorite-user-channels" on mount', async () => {
        let hook;
        await act(async () => {
            hook = renderHook(() => useFetch('/favorite-user-channels'));
        });
        const { result } = hook;

        renderComponent();

        await waitFor(() => {
            expect(result.current.response).toEqual('');
        });
    });

    test('should pass filtered data to ChannelList component and rendered it', async () => {
        const mChannelsResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        };

        const mFavoritesResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(mockFilteredData),
        };

        renderComponent();

        global.fetch = jest.fn().mockResolvedValue(mChannelsResponse);
        global.fetch = jest.fn().mockResolvedValue(mFavoritesResponse);
        

        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

});
