import { collectionActionTypes } from "./collection.types";

const INITIAL_STATE = {
  collections: [],
};

export const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionActionTypes.SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
