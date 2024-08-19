import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import postReducer from './postReducer';
import TweetsEntitiesSlice from './entities/tweet';
import UsersEntitiesSlice from './entities/user';

const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        entities: combineReducers({
            tweets: TweetsEntitiesSlice,
            users: UsersEntitiesSlice
        })
    }
})

export default store;
