/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { combineReducers } from 'redux';
import authentication from './authentication';

const rootReducer = combineReducers({
  authentication
});

export default rootReducer;
