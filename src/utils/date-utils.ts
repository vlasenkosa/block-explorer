import { format } from 'date-fns'

const MILLISECONDS = 1000;

const convertUnixTimestampToDate = (unixTime: number): number => (unixTime * MILLISECONDS);

const ISO_DATE_FORMAT = 'yyyy-MM-dd HH:mm';

const formatDateToISO = (date: number, dateFormat: string = ISO_DATE_FORMAT): string => format(date, dateFormat);

export const formatBlockDate = (date: number|undefined, dateFormat?: string): string => {
    if (!date) {
        return '';
    }

    return formatDateToISO(convertUnixTimestampToDate(date), dateFormat);
};
