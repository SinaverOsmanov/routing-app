export const pathToArray = (loc) => {
  return loc.split("/").filter((l) => l && l);
};
