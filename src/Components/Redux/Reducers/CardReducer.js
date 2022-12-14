export const CardReducer = (
  state = [
    {
      cardImage: "logo192.png",
      cardTitle: "Card Title",
      cardDisc:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
    },
  ],
  action
) => {
  if (action.type === "ADD_CARD_ITEM") {
    return [...state, action.paylaod];
  } else return state;
};
