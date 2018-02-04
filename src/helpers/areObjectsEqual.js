import areArraysEqual from './areArraysEqual';

const areObjectsEqual = (a, b, recurse = true) => {
  if (typeof a !== 'object' || typeof b !== 'object') return false;

  for (let i in a) {
    if (b[i]) {
      if (typeof a[i] === 'object') {
        if (Array.isArray(a[i])) {
          if (!areArraysEqual(a[i], b[i])) return false;
        } else {
          if (!areObjectsEqual(a[i], b[i])) return false;
        }
      } else {
        if (a[i] !== b[i]) return false;
      }
    } else {
      return false;
    }
  }

  if (recurse) {
    if (!areObjectsEqual(b, a, false)) return false;
  }

  return true;
};

export default areObjectsEqual;
