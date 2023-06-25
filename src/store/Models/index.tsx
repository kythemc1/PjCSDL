export interface IAuthState {
    isLogged: boolean;
    token: string | null;
    refreshToken: string | null;
    refreshTokenExpiredDate: number | null;
    type: string | null;
}

export interface IUserState {
    id: number | null;
    address: string | null;
    taxCodeCompany: string | null;
    avatar: string | null;
    birthday: Date | null;
    firstName: string | null;
    gender: string | null;
    email: string | null;
    fullNameUser: string | null;
    role : string | null;
    username: string | null;
    user_keycloak_id: string | null;

}
export interface localUser {
    userName: string,
    password: string,
    logged : boolean
}
export interface market {
    products:[
        nameArrival: string,
        cost : number,
    ]
}
