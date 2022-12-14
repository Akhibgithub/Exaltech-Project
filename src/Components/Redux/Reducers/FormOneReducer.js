export const FormOneReducer = (state = [], action) => {
  if (action.type === "FORM_ONE_DATA") {
    return [...state, action.paylaod];
  } else return state;
};
