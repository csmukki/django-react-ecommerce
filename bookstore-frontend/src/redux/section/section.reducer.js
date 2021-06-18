import { sectionTypes } from "./section.types";

const INITIAL_STATE = {
  section: [],
};

export const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sectionTypes.SET_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    default:
      return state;
  }
};
