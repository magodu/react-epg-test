import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Program from '../components/epg/Program/Program'; 

const programMockData = {
    title: 'program_title',
    id: 'id',
    start: '2023-03-15T00:00:00+01:00',
    end: '2023-03-15T00:20:00+01:00'
}

const handleClick = jest.fn();

describe('Program component', () => {

    const renderComponent = () =>
        render(
            <Router>
                <Program programData={programMockData} onShowDetail={handleClick}  />
            </Router>
        );

        afterEach(cleanup);

        test('should render a Program component with the props data given', () => {
            renderComponent();
    
            const titleText = screen.getByText('program_title');
    
            expect(titleText).toBeInTheDocument();
        });

        test('should call a modal to be opened after click to see the program detail', async () => {
            renderComponent();
    
            const titleText = screen.getByText('program_title');
            expect(titleText).toBeInTheDocument();

            fireEvent.click(titleText);

            expect(handleClick).toBeCalledTimes(1);
            expect(handleClick).toBeCalledWith(programMockData);
        });

});
