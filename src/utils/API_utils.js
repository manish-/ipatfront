import axios from 'axios';
import API from '../constants/API_Constants';


export const reqToAPI = axios.create({
    baseURL: `${API.URL_PREFIX}`,
    responseType: 'json', // default
    onUploadProgress: function (progressEvent) {
        // //console.log('progressEvent', progressEvent);
    },
    onDownloadProgress: function (progressEvent) {
        
        // if(progressEvent.target.status=="error" && progressEvent.target.tokenExpired){
        //     //console.log('progressEvent', progressEvent.target);
        // }
    }

});

export const reqWithBearerToAPI = axios.create({
    baseURL: `${API.URL_PREFIX}`,
    responseType: 'json', // default
    onUploadProgress: function (progressEvent) {
        // //console.log('progressEvent', progressEvent);
    },
    onDownloadProgress: function (progressEvent) {
        // //console.log('progressEvent', progressEvent.originalTarget);
    },
    transformResponse: [function (data) {
        // Do whatever you want to transform the data        
        try {
            data = JSON.parse(data);
            if(data.tokenExpired){
                localStorage.removeItem('accessToken');
            }
            return data;

        } catch (e) {
            // //console.log("data2", data);
            // //console.log("e",e);
            return data;
        }


    }],
    // cancelToken: new CancelToken(function (cancel) {
    //     //console.log("cancel",cancel);
    // }),

});