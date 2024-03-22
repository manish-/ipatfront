import API from '../../constants/API_Constants';

export const fetch_token = (userLoginDetails) => ({
    type: API.LOGIN.WITH_PASSWORD.FETCH,
    payload: userLoginDetails
});

export const verify_token = (accessToken=null, refreshToken=null) => ({
    type: API.LOGIN.VERIFY_TOKEN.FETCH,
    payload: {
        accessToken,
        refreshToken
    }
});

export const signout = () => ({
    type: API.LOGIN.SIGNOUT.FETCH
});
