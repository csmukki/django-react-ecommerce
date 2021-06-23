import { collectionActionTypes } from "./collection.types";

export const setCollections = (collections) => ({
  type: collectionActionTypes.SET_COLLECTIONS,
  payload: collections,
});
