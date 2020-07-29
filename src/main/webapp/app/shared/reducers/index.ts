/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { combineReducers } from 'redux';
import authentication, { AuthenticationState } from './authentication';
import userState, { UserState } from '../../module/user-management/user.reducer';
import dynamicInlineTableState, { DynamicInlineTableState } from 'app/module/dynamic-inline-table/dynamic-inline-table.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly userState: UserState;
  readonly dynamicInlineTableState: DynamicInlineTableState;
}
const rootReducer = combineReducers<IRootState>({
  authentication,
  userState,
  dynamicInlineTableState
});

export default rootReducer;
