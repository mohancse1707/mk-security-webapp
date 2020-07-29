/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../../shared/reducers/action-type.util';

export const ACTION_TYPES = {
  FETCH_DATA: 'dynamicInlineTable/FETCH_DATA',
  RESET: 'dynamicInlineTable/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false
};

export type DynamicInlineTableState = Readonly<typeof initialState>;

export default (state: DynamicInlineTableState = initialState, action): DynamicInlineTableState => {

  switch (action.type) {
      case REQUEST(ACTION_TYPES.FETCH_DATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
      case FAILURE(ACTION_TYPES.FETCH_DATA):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
      case SUCCESS(ACTION_TYPES.FETCH_DATA):
      return {
        ...state,
        loading: false,
        users: action.payload.data
      };
      case ACTION_TYPES.RESET:
        return {
          ...initialState
        };
      default:
        return state;
    }
};

export const getTableData = () => ({
  type: ACTION_TYPES.FETCH_DATA,
  payload: axios.get(`/authorities`)
});
