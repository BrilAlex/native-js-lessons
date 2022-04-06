import {IGlobalState} from "./state";

export const selectCurrencyState = (state: IGlobalState) => state.currency;