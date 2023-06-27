/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  return array.map(value => appendString + value);
}
