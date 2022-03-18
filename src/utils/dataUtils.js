import { DateTime } from 'luxon';


export const formatDate = (date) => {
    if (!date) throw new Error("date in null or undefined")
    const formattedDate = DateTime.fromISO(date)

    if (formattedDate.toString() === "Invalid DateTime") throw new Error('invalid date')
    return formattedDate.toLocaleString(DateTime.DATETIME_MED);
}