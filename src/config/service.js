/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import config from './base'
import axios from 'axios'
import qs from 'qs'

export default {
  post: function (url, params, successCallBack, errorCallBack) {

    //配置请求参数
    config.serviceConfig.data = params;
    url = config.serviceConfig.baseURL + url;
    //返回请求参数
    axios.post(url, qs.stringify(params))
      .then(function (response) {
        if (response && response.data) {
          successCallBack(response);
        } else {
          console.log('系统异常');
          errorCallBack(response);
        }
      })
      .catch(function (error) {
        console.log('系统异常');
      })
  }
}


