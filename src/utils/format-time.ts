import { format, getTime, formatDistanceToNow } from 'date-fns';
import moment from "moment/moment";

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null | undefined;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function getSearchDate() {
  //str1.padStart(2, '0')
  const currnetDate = moment();
  const dateList = [];

  const date = currnetDate.format('yyyyMM');
  dateList.push(date);
  for (let i = 0; i < 5; i++) {
    const date = currnetDate.subtract(1, 'M').format('yyyyMM');
    dateList.push(date);
  }

  return dateList;
}
