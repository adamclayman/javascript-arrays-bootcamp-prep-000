chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){
  arr2 = [element, ...arr];
  return arr2;
}

function addElementToEndOfArray(arr, element) {
  arr2 = [...arr, element];
  return arr2;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[parseInt(index, 10)];
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function removeElementFromEndOfArray() {
  return arr.slice(0, arr.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}