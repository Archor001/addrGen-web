import i18n from "../locales/i18n";
const { t } = i18n.global;

export function formatStamp(stamp) {
  if((typeof stamp != 'bigint' && typeof stamp != 'number') || stamp === 0) {
    return '-'
  }
  if(stamp < 1e12)
    stamp = stamp * 1000
  var date = new Date(stamp);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y+M+D+h+m+s;
}

export function formatGoTime(time) {
  if(!time) return '-'
  try {
    const str = time.replace(/\.([\d]{3})[\d]{0,6}$/, '.$1')
    return formatStamp(Date.parse(str))
  } catch (e) {
    return time
  }
}