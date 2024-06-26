import {
  ADD_USER_ANSWER,
  FETCH_DATA,
  GET_USER_ANSWER,
  GET_USER_ANSWER_BY_USER,
  GET_USER_ANSWER_BY_USER_ID,
} from "../action/userAnswerAction";

const initialState = {
  data: [],
  dataDetail: [],
  dataUserId: [],
  isLoading: false,
  isLoadingDetail: false,
  isLoadingAnswer: false,
  isLoadingUserId: false,
};

function userAnswerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
      };
    case GET_USER_ANSWER:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_USER_ANSWER_BY_USER_ID:
      return {
        ...state,
        dataUserId: action.payload,
        isLoadingUserId: false,
      };
    case GET_USER_ANSWER_BY_USER:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default userAnswerReducer;
