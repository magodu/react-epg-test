import '@testing-library/jest-dom/extend-expect';
import { calculateProgramWidth, getFormattedTime, getFormattedDate } from '../utils';

describe('utils functions', () => {
    test('function "calculateProgramWidth" should calculate program width correctly', () => {
        const startDate = '2023-03-16T09:00:00Z';
        const endDate = '2023-03-16T10:30:00Z';
        const expectedWidth = 450; // 300 units per hour => 1.5 hours = 450
        const actualWidth = calculateProgramWidth(startDate, endDate);
        expect(actualWidth).toEqual(expectedWidth);
    });

    test('function "getFormattedTime" should return the time in hh:mm am/pm format', () => {
        // Test for 10:00 am
        const date1 = '2023-03-16T10:00:00+01:00';
        const expectedTime1 = '10:00am';
        const actualTime1 = getFormattedTime(date1);
        expect(actualTime1).toEqual(expectedTime1);

        // Test for 2:45 pm
        const date2 = '2023-03-16T14:45:00+01:00';
        const expectedTime2 = '2:45pm';
        const actualTime2 = getFormattedTime(date2);
        expect(actualTime2).toEqual(expectedTime2);

        // Test for 12:30 pm
        const date3 = '2023-03-16T12:30:00+01:00';
        const expectedTime3 = '12:30pm';
        const actualTime3 = getFormattedTime(date3);
        expect(actualTime3).toEqual(expectedTime3);

        // Test for 12:00 am
        const date4 = '2023-03-16T00:00:00+01:00';
        const expectedTime4 = '12:00am';
        const actualTime4 = getFormattedTime(date4);
        expect(actualTime4).toEqual(expectedTime4);
    });

    test('function "getFormattedDate" should return a formatted date string with day of the week, day, and month', () => {
        const date = '2023-03-16T00:00:00+01:00';
        const expectedDateString = 'Thursday 16.03.';
    
        const actualDateString = getFormattedDate(date);
    
        expect(actualDateString).toEqual(expectedDateString);
      });
});
