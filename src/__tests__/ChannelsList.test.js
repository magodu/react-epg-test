import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ChannelsList from '../components/epg/ChannelsList/ChannelsList'; 

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

describe('ChannelsList component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <ChannelsList data={mockData} />
            </Router>
        );

        afterEach(cleanup);

        test('should render several channel component according the props data given (2)', () => {
            renderComponent();

            const contentEl = screen.getByTestId('content');

            const channels = contentEl.querySelectorAll('ul').length;
            expect(channels).toBe(2);

        });

        test('should render button with text "Now" ', async () => {
          
            renderComponent();
            expect(await screen.findByText('Now')).toBeInTheDocument();
        });
});
