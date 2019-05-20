import {message} from 'antd';
import axios from 'axios';
import {globalBaseUrl} from 'src/globalconfig/index';

//下载post 文档
export const tmsDownLoad = async (api, e) => {
    let httpd = window.location.protocol;
    await axios
        .post(`${httpd}//${location.host}${globalBaseUrl}${api}`, e, {responseType: 'blob'})
        .then(res => {
            let url = window.URL.createObjectURL(new Blob([res.data]));
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.setAttribute('download', 'subjectslist.xlsx');
            document.body.appendChild(link);
            link.click();
        })
        .catch(function(error) {
            message.error(error.message || error);
        });
};
