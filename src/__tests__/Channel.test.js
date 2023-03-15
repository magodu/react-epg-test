import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Channel from '../components/epg/Channel/Channel'; 

const mockData = {
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
        },
        {
            title: 'title2',
            id: 'dummy_program_id_1',
            start: '2023-03-15T00:00:00+01:00',
            end: '2023-03-15T00:20:00+01:00'
        },
        {
            title: 'title3',
            id: 'dummy_program_id_2',
            start: '2023-03-15T00:00:00+01:00',
            end: '2023-03-15T00:20:00+01:00'
        }
    ]
};

window.HTMLElement.prototype.scrollTo = jest.fn();

describe('Channel component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <Channel channelData={mockData} />
            </Router>
        );

        afterEach(cleanup);

        test('should render several Program component according the props data given (3)', () => {
            renderComponent();

            const contentEl = screen.getByTestId('channel');

            const channels = contentEl.querySelectorAll('li').length;
            expect(channels).toBe(3);

        });

        test('should render channel programs ', async () => {
          
            renderComponent();
            expect(await screen.findByText('title1')).toBeInTheDocument();
            expect(await screen.findByText('title2')).toBeInTheDocument();
            expect(await screen.findByText('title3')).toBeInTheDocument();
        });

});
