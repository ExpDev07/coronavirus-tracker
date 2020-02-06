import { helper } from '@ember/component/helper';
import numeral from 'numeral';

export default helper(function format([ value, format ]) {
  return numeral(value).format(format || '0,0');
});
