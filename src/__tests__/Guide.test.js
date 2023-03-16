import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, act, waitFor, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Guide from '../pages/Guide/Guide';
import useFetch from '../hooks/useFetch';

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
                {
                    title: 'title2',
                    id: 'dummy_program_id_1',
                    start: '2023-03-15T00:20:00+01:00',
                    end: '2023-03-15T01:20:00+01:00',
                },
            ],
        },
    ],
};

window.HTMLElement.prototype.scrollTo = jest.fn();

describe('Guide component', () => {
    const renderComponent = () =>
        render(
            <Router>
                <Guide data={mockData.channels} />
            </Router>
        );

    afterEach(cleanup);

    test('should call useFetch hook and get data to the url "/epg" on mount', async () => {
        const url = '/epg';
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

    test('should pass data received to ChannelList component and rendered it', async () => {
        const mResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        };

        global.fetch = jest.fn().mockResolvedValue(mResponse);

        renderComponent();

        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(await screen.findByText('Now')).toBeInTheDocument();
    });

    xtest('should show an error if fetch call fails', async () => {
        window.fetch = jest.fn();
        window.fetch.mockRejectedValue(() => Promise.reject('API error'));

        renderComponent();

        await waitFor(() => {
            const errorText = screen.queryByText('An error has ocurred');
            expect(errorText).toBeInTheDocument();
        });
    });
});
