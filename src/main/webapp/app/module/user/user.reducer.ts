/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../../shared/reducers/action-type.util';
import { IUser, defaultValue } from '../../shared/models/user.model';

export const ACTION_TYPES = {
  FETCH_ROLES: 'userManagement/FETCH_ROLES',
  FETCH_USERS: 'userManagement/FETCH_USERS',
  RESET: 'userManagement/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  users: [] as ReadonlyArray<IUser>,
  updating: false,
  updateSuccess: false,
  totalItems: 0
};

const apiUrl = 'api/users';

export type UserState = Readonly<typeof initialState>;

export default (state: UserState = initialState, action): UserState => {

  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_USERS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_USERS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_USERS):
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        totalItems: 0
      };
    default:
      return state;
  }
};

export const getUsers = () => ({
  type: ACTION_TYPES.FETCH_ROLES,
  payload: axios.get(`${apiUrl}/authorities`)
});
