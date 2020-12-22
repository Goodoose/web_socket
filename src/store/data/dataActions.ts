import * as dataActionTypes from './dataConstants';
import { dataType} from './dataTypes';

export const setDataRequest = (data: dataType) => ({
  type: dataActionTypes.DATA,
  payload: { data },
});

export const setDataSuccess = (data: dataType) => ({
  type: dataActionTypes.DATA_SUCCESS,
  payload: { data },
});

export const setDataFail = (errors: object[]) => ({
  type: dataActionTypes.DATA_FAIL,
  payload: { errors },
});
