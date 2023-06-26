/* eslint-disabled-line */
/* //eslint-disabled-line no-va */

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true; //eslint-disabled-line
    const task2 = false; //eslint-disabled-line
  }

  return [task, task2];
}
