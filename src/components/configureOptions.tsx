import { NarrateOptions, defaultOptions } from "./options";

// This will hold the current options, starting with the default options
let currentOptions: NarrateOptions = { ...defaultOptions };

export const configureOptions = (
  customOptions: Partial<NarrateOptions>
): void => {
  currentOptions = { ...currentOptions, ...customOptions };
};

export const getOptions = (): NarrateOptions => {
  return currentOptions;
};
