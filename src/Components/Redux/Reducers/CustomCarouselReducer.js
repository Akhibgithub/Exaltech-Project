export const CustomCarouselReducer = (
  state = [
    {
      carImage: "logo192.png",
      carTitle: "First Heading",
      carDisc: "skljfsdfjofjof",
    },
  ],
  action
) => {
  if (action.type === "ADD_CAR_ITEM") {
    return [...state, action.paylaod];
  } else return state;
};
