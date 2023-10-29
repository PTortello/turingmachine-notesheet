export const stringSwitcher = (currentString: string) => {
  let newString = "";
  switch (currentString) {
    case "":
      newString = "close";
      break;
    case "close":
      newString = "check";
      break;
    default:
      break;
  }
  return newString;
};
