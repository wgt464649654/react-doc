import {message} from 'antd';
import TMHTTP from 'TMSHTTP';

//用户注销
export const ApiDoLogout = async e => {
    try {
        return await TMHTTP.post('../sso/sso/doLogout', {...e});
    } catch (error) {
        message.error(error.message || error);
    }
};

