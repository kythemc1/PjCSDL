import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";
import {RootState} from "../store/reduxProvider";
import {useDispatch, useSelector} from "react-redux";
import {API_PATHS} from "../constants/API_PATHS";
import {setAuth} from "../store/Reducer/authSlice";
import {useDebouncedCallback} from "use-debounce";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const [account, setAccount] = useState<{
        username: string;
        password: string;
    }>({
        username: '',
        password: '',
    });



    const onSetAccount = (field: 'username' | 'password', value: string) => {
        setAccount({
            ...account,
            [field]: value,
        });
    };




    const Login = useDebouncedCallback(
        async ({username, password}: {username: string; password: string}) => {
            let dataInput = {
                username: username,
                password: password
            };
            try {
                console.log(' vao hàm nàyyyy',dataInput)
                // const responsejs = await axios({
                //     method: 'post',
                //     url: API_PATHS.LOGIN,
                //     data: dataInput
                // });
                if(username=='nguyenchihieu@gmail.com' && password == '1'){
                    dispatch(
                        setAuth({
                            isLogged: true,
                            token: '',
                            refreshToken: '',
                            refreshTokenExpiredDate: null,
                            type: null,
                        })
                    );
                    console.log('chua returnnn')
                    navigate('/')
                }
                // const resData = responsejs.data.data;


                // );
            } catch (error) {
            }
            // }
        },
    );


    return {
        account,
        onSetAccount,
        Login,
    };
};
