export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

const initialState = {
  smurfs: [],
  errors: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_SMURF_START:
      return {
        ...state,
        smurfs: [],
        errors: "",
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        errors: "",
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        smurfs: [],
        errors: action.payload,
      };
    case "POST_SMURF_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        errors: "",
      };
  }
};
