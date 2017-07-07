const initialState = {routeName: 'daily'}


export default (state = {initialState: 'currently'}, action) => {
  switch(action.type) {

    case 'CHANGING_ROUTE':
    return action.routeName;
    default:
    return state
  }
}
