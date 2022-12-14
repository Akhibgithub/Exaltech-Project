export const FooterReducer = (
    state = [
      {
        FooterImage: "logo192.png",
        FooterTitle: "Card Title",
        FooterDisc:
          "Some quick example text to build on the card title and make up the bulk of the cards content.",
      },
      {
        FooterImage: "logo192.png",
        FooterTitle: "Card Title",
        FooterDisc:
          "Some quick example text to build on the card title and make up the bulk of the cards content.",
      },
      {
        FooterImage: "logo192.png",
        FooterTitle: "Card Title",
        FooterDisc:
          "Some quick example text to build on the card title and make up the bulk of the cards content.",
      },
    ],
    action
  ) => {
    if (action.type === "ADD_CARD_ITEM") {
      return [...state, action.paylaod];
    } else return state;
  };