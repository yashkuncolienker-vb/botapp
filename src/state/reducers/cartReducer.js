const initialState = {
  incart: {},
  count: 0,
  id_to_name: {},
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case 'addToCart':
      const isItemInCart = Object.keys(state.incart).includes(payload.id);
      const itemCountInCart = isItemInCart ? state.incart[payload.id] + 1 : 1;
      return {
        incart: { ...state.incart, [payload.id]: itemCountInCart },
        count: state.count + 1,
        id_to_name: { ...state.id_to_name, [payload.id]: payload.botname },
      };

    case 'dropFromCart':
      const newCart = {
        ...state.incart,
        [payload.id]: state.incart[payload.id] - 1,
      };
      const new_id_to_name = { ...state.botname };
      const isLastItem = state.incart[payload.id] === 1;
      if (isLastItem) {
        delete newCart[payload.id];
        delete new_id_to_name[payload.botname];
      }
      return {
        incart: { ...newCart },
        count: state.count - 1,
        id_to_name: { ...state.id_to_name, ...new_id_to_name },
      };

    default:
      return state;
  }
};

export default reducer;
