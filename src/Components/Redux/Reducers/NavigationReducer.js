export const NavigationReducer = (state = [{
    name: "Home",
    link: "https://react-bootstrap.github.io/components/alerts/",
    target: "_blanck",
  },], action) => {
  if (action.type === "ADD_LINK") {
    return [...state, action.paylaod];
  } else return state;
};
