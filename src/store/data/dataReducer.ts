import * as dataActionTypes from './dataConstants';
import { DataType, dataType } from './dataTypes';

export interface DataState {
  data: dataType[];
  error: object[];
}

const initialState = {
  data: [],
  error: [],
};

const dataReducer = (state: DataState = initialState, action: DataType) => {
  switch (action.type) {

    case dataActionTypes.DATA_SUCCESS: {
      const { payload } = action;
      console.log('payload.data: ', payload.data);
      console.log('state.data: ', state);
      return {
        ...state,
        data: [payload.data],
        // data: [...state.data, payload.data],
      };
    }

    case dataActionTypes.DATA_FAIL: {
      const { payload } = action;
      return {
        ...state,
        errors: payload.errors,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
