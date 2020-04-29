/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { createStore, applyMiddleware, bindActionCreators} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer  from '../shared/reducers';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(logger,thunk));

export default store;
