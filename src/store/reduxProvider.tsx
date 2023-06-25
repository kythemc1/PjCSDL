import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import {generatePersistConfig} from './../ultis/Redux';
import {authReducer} from "./Reducer/authSlice";
import {cartReducer} from "./Reducer/cartSlice";
const reducers = combineReducers({
    auth: authReducer,
    cart: cartReducer
});

const version = 22021401;

const persistedReducer = persistReducer(
    generatePersistConfig({
        whitelist: [
            'auth',
            'cart'
        ],
        version,
    }),
    reducers,
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        return middlewares;
    },
});

const persistor = persistStore(store);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
