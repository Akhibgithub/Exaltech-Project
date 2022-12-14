import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FormOneReducer } from "../Reducers/FormOneReducer";
import { FormTwoReducer } from "../Reducers/FormTwoReducer";
import { FormThreeReducer } from "../Reducers/FormThreeReducer";
import { NavigationReducer } from "../Reducers/NavigationReducer";
import { CustomCarouselReducer } from "../Reducers/CustomCarouselReducer";
import { CardReducer } from "../Reducers/CardReducer";
import { FooterReducer } from "../Reducers/FooterReducer";
export const myStore = () => {
  return legacy_createStore(
    combineReducers({
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
      NavigationReducer,
      CustomCarouselReducer,
      CardReducer,
      FooterReducer,
    }),
    composeWithDevTools()
  );
};
