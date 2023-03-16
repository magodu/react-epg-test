import { act, renderHook, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import useFetch from '../hooks/useFetch';

const url = '/api.example';
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

describe('useFetch custom hook', () => {
    // beforeEach(() => {
    //     global.fetch = jest.fn(() =>
    //         Promise.resolve({
    //             json: () => act(() => Promise.resolve(mockData)),
    //             status: 200
    //         })
    //     );
    // });

    afterEach(() => {
        global.fetch.mockClear();
    });

    afterAll(() => {
        global.fetch.mockRestore();
    });

    test('should set isLoading to true when fetching data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => act(() => Promise.resolve(mockData)),
                status: 200
            })
        );

        const { result } = renderHook(() => useFetch(url));
    
        expect(result.current.isLoading).toBe(true);
    
    });

    test('should fetch data successfully', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => act(() => Promise.resolve(mockData)),
                status: 200
            })
        );
        const { result, rerender } = renderHook(() => useFetch(url));

        expect(result.current.isLoading).toBe(true);

        rerender();

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
            expect(result.current.response).toEqual(mockData);
            expect(result.current.error).toBe(false);
        });
    });

    test('should set error to true when fetching fails', async () => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.reject('Error occured!'),
            })
        );

        const { result, rerender } = renderHook(() => useFetch(url));
      
        rerender();

        await waitFor(() => {
            expect(result.current.error).toBe(true);
        });
    
        
    });
});
