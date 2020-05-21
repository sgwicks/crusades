exports.evaluateConditions = (conditions, values) => {
  for (const key in conditions) {
    if (conditions[key] < 0) {
      if (values[key] > -conditions[key]) return false;
    } else if (values[key] < conditions[key]) return false;
  }
  return true;
};
