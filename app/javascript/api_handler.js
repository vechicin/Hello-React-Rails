const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';
const GET_GREETING_FAILURE = 'GET_GREETING_FAILURE';

const url = '/v1/greetings';

const initialState = { 
    greeting: 'Greetings!',
};

const getGreetingRequest = () => ({
  type: GET_GREETING_REQUEST
})
const getGreetingSuccess = (payload) => ({
  type: GET_GREETING_SUCCESS,
  payload
})
const getGreetingFailure = () => ({
  type: GET_GREETING_FAILURE
})

export const getGreeting = () => {
  return async (dispatch) => {
    dispatch(getGreetingRequest());
    try {
      const response = await fetch(url);
      const json = await response.json()
      dispatch(getGreetingSuccess(json))
    }
    catch (error) {
      dispatch(getGreetingFailure)
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.payload;
    case GET_GREETING_FAILURE:
      return 'Loading failed';
    default:
      return state;
  }
};

export default reducer;
