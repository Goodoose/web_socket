import * as dataActionTypes from './dataConstants';

export interface dataType {
  date: number;
  value: number;
}

export type SetDataRequestAction = {
  type: typeof dataActionTypes.DATA;
  payload: { data: dataType };
};

type SetDataSuccessAction = {
  type: typeof dataActionTypes.DATA_SUCCESS;
  payload: { data: dataType };
};

type SetDataFailAction = {
  type: typeof dataActionTypes.DATA_FAIL;
  payload: { errors: object[] };
};

export type DataType =
  | SetDataRequestAction
  | SetDataSuccessAction
  | SetDataFailAction;
