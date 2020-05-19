/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { combineReducers } from 'redux';
import authentication, { AuthenticationState } from './authentication';
import userState, { UserState } from '../../module/user/user.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly userState: UserState;
}
const rootReducer = combineReducers<IRootState>({
  authentication,
  userState
});

export default rootReducer;
