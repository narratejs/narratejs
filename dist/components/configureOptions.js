import { defaultOptions } from "./options";
// This will hold the current options, starting with the default options
let currentOptions = { ...defaultOptions };
export const configureOptions = (customOptions) => {
    currentOptions = { ...currentOptions, ...customOptions };
};
export const getOptions = () => {
    return currentOptions;
};
