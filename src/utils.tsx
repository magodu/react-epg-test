export const totalDuration = 24 * 60 * 60 * 1000;  // 24 hours in milliseconds
export const millisecondsInHour = 3600000;         // 1000 * 60 * 60
export const millisecondsInMinute = 60000;         // 1000 * 60
export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const calculateProgramWidth = (startDate: string, endDate: string): number => {
    const startDateUtc = Date.parse(startDate);
    const endDateUtc = Date.parse(endDate);
    const millisecondsDiff = endDateUtc - startDateUtc;

    const horas = Math.floor(millisecondsDiff / millisecondsInHour);
    const minutos = Math.floor((millisecondsDiff % millisecondsInHour) / millisecondsInMinute);

    return (horas * 60 + minutos) * 5;
};

export const getCurrentTime = (): number => {
    const now = new Date();
    const hoursInMs = now.getHours() * millisecondsInHour;
    const minutesInMs = now.getMinutes() * millisecondsInMinute;
    const secondsInMs = now.getSeconds() * 1000;
    const milliseconds = now.getMilliseconds();
    return hoursInMs + minutesInMs + secondsInMs + milliseconds;
}
  

export const getCurrentTimeOffset = (): number => {
    const widthPerHour = 300;
    return Math.floor(getCurrentTime() * widthPerHour / 3600000);
};

export const getFormattedTime = (date: string): string => {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}${ampm}`;
};


export const generateHoursArray = (): string[] => {

    const hoursArray: string[] = ['12:00am'];

    for (let i = 1; i < 24; i++) {
        let hour = i % 12 === 0 ? 12 : i % 12; // get hour in 12 hours format
        let ampm = i < 12 ? 'am' : 'pm';       // get am or pm

        if (hour === 12 && ampm === 'pm') {
            hoursArray.push(`${hour}:00${ampm}`);
        } else {
            hoursArray.push(`${hour}:00${ampm}`);
        }
    }

    return hoursArray;
};

export const getFormattedDate = (date: string ): string => {
    const convertedDate = new Date(date);

    const auxDate = new Date(convertedDate.getFullYear(), convertedDate.getMonth(), convertedDate.getDate());
    const dayOfWeek = daysOfWeek[auxDate.getDay()];
    const month = months[auxDate.getMonth()];
    const day = auxDate.getDate();

    return `${dayOfWeek} ${day}.${month}.`;
};
