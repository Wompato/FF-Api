function removeUndefKeys(filterObj) {
  const newObj = Object.keys(filterObj).forEach(
    (key) => filterObj[key] === undefined && delete filterObj[key]
  );
  return newObj;
}

module.exports = removeUndefKeys;
