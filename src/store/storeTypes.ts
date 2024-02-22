import { appType } from "./app/types";


export enum dbCollections {
  PersonalTools = "PersonalTools",
  PublicTools = "PublicTools",
  storeProducts = "storeProducts",
}

export interface RootState {
  app: appType,
  products: any,
}