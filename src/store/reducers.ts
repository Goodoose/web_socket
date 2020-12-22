import { combineReducers, Reducer } from 'redux';

import * as dataActionTypes from './data/dataConstants';
import data, { DataState } from './data/dataReducer';
import { DataType } from './data/dataTypes';

type ActionType = DataType;

export interface StateType {
  data: DataState;
}

const appReducer: Reducer<StateType> = combineReducers<StateType>({
  data,
});

export default (state: StateType | undefined, action: ActionType) => {
  // if (action.type === dataActionTypes.DATA) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};
