import areObjectsEqual from './areObjectsEqual';

const areArraysEqual = (a, b, recurse = true) => {
  if (!(Array.isArray(a)) || !(Array.isArray(b))) return false;

  for (let i = 0;i < a.length;i++) {
    if (typeof a[i] === 'object') {
      if (Array.isArray(a[i])) {
        let exists = false;
        for (let j = 0;j < b.length;j++) {
          exists = areArraysEqual(a[i], b[j]);
          if (exists) break;
        }

        if (!exists) return false;
      } else {
        let exists = false;
        for (let j = 0;j < b.length;j++) {
          exists = areObjectsEqual(a[i], b[j]);
          if (exists) break;
        }

        if (!exists) return false;
      }
    } else {
      if (b.indexOf(a[i]) < 0) return false;
    }
  }

  if (recurse) {
    if (!areArraysEqual(b, a, false)) return false;
  }

  return true;
};

export default areArraysEqual;
