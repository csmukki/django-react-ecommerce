import { sectionTypes } from "./section.types";

export const setSection = (section) => ({
  type: sectionTypes.SET_SECTION,
  payload: section,
});
