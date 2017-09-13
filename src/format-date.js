import moment from 'moment';

export default function formatDate(fromDate, toDate, mask) {
  const delta = moment(toDate).diff(moment(fromDate));

  return moment(delta).format(mask);
}
