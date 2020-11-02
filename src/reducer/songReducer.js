const initialState = {
  playing: '',
};

export const songReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PLAYING':
      return { ...state, playing: payload };

    default:
      return state;
  }
};
