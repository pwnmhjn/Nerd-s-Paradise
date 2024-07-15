export const ObjectHasValue = (obj) => {
  if (!obj.length) {
    return false;
  } else if (
    Object.values(obj).some(
      (field) => field === null || field === "" || field === undefined
    )
  ) {
    return false;
  } else {
    return true;
  }
};
