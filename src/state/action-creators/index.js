export const depositMoney = (amount) => {
  // next step create an action and dispatch it
  // need to return another function with dipatch params

  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
