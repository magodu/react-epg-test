import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Sidebar from '../components/epg/Sidebar/Sidebar'; 

const mockData = [
    {
        id: 'channel1',
        title: 'Channel 1',
        images: {
            logo: 'http://www.test.es/dummy-image.png'
        },
        schedules: [
            {
                title: 'title1',
                id: 'dummy_program_id_0',
                start: '2023-03-15T00:00:00+01:00',
                end: '2023-03-15T00:20:00+01:00'
            }
        ]
    },
    {
        id: 'channel2',
        title: 'Channel 2',
        images: {
            logo: 'http://www.test.es/dummy-image.png'
        },
        schedules: [
            {
                title: 'title2',
                id: 'dummy_program_id_1',
                start: '2023-03-15T00:00:00+01:00',
                end: '2023-03-15T00:20:00+01:00'
            }
        ]
    }
];

window.HTMLElement.prototype.scrollTo = jest.fn();

describe('Sidebar component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <Sidebar data={mockData} />
            </Router>
        );

        afterEach(cleanup);

        test('should render several channels according the props data given (2)', () => {
            renderComponent();

            const contentEl = screen.getByTestId('sidebar');

            const channels = contentEl.querySelectorAll('div').length;
            expect(channels).toBe(2);

            const channelImgElems = contentEl.querySelectorAll('img').length;
            expect(channelImgElems).toBe(2);

        });
});
