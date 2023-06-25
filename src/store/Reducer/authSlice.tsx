import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IAuthState, IUserState, localUser} from './../Models/index';

interface Product {
    name: string;
    price: number;
}

interface AppState {
    auth: IAuthState;
    user: IUserState | null;
    localUser: localUser;
    products: Product[];
}

const initialState: AppState = {
    auth: {} as IAuthState,
    user: null,
    localUser: {} as localUser,
    products: [],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<IAuthState>) => {
            state.auth = action.payload;
        },
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.user = action.payload;
        },
        logout: state => {
            state.auth = {
                isLogged: false,
                token: null,
                refreshToken: null,
                refreshTokenExpiredDate: null,
                type: null,
            };
            state.user = null;
        },

        setLocalUser(state,action: PayloadAction<localUser>){
            state.localUser=action.payload;
        },

    }

});

export const { setAuth } = authSlice.actions;

export const authReducer =  authSlice.reducer;
