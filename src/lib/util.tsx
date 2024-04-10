export function displayObjectProperties(obj: {
  [x: string]: any;
  hasOwnProperty: (arg0: string) => any;
}) {
  let displayString = "";

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      console.log(`${property}: ${obj[property]}`);
      displayString += `${property}: ${obj[property]}\n`; // Adding a newline for readability
    }
  }

  // Assuming you might want to use the string for something else, like displaying it in the UI
  return displayString;
}
