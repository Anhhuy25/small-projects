
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(item => item.id !== action.payload)
      }
    case 'ADD':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          action.payload
        ]
      }
    default:
      return state;
  }
}

export default reducer;