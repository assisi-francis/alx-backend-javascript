export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += item + ' | ';
  }
  result = result.slice(0, -3); // Remove the trailing ' | ' characters
  return result;
}
