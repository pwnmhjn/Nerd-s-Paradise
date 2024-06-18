export const ObjectHasValue = (obj) => {
  if (
    Object.values(obj).some(
      (field) => field === null || field === "" || field === undefined
    )
  ) {
    return false;
  } else {
    return true;
  }
};
