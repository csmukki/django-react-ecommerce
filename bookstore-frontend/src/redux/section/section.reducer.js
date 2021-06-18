import { sectionTypes } from "./section.types";

const INITIAL_STATE = {
  sections: [],
};

export const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sectionTypes.SET_SECTION:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};
