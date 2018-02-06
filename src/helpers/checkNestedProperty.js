const checkNestedProperty = (obj, prop) => {
  const parts = prop.split('.');
  let current = obj;
  let index = 0;

  while (current) {
    if (index === parts.length) return true;
    current = current[parts[index]];
    index++;
  }

  return false;
}

export default checkNestedProperty;
