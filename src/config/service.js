/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import config from './base'
import axios from 'axios'
import {alert,showLoading} from '../utils/tools'

export default {
  post: function (url, params, successCallBack, errorCallBack) {
    //调用网络请求前显示loading框
   showLoading(true);

    //配置请求参数
    config.serviceConfig.data = params;

    //返回请求参数
    axios.post(url, {}, config.serviceConfig)
      .then(function (response) {
        if (response && response.data) {
          successCallBack(response);
        } else {
          //alert('系统异常');
          errorCallBack(response);
        }
        showLoading(false)//关闭loading框
      })
      .catch(function (error) {
        ////关闭loading框
       showLoading(false)
        // alert('系统异常');
      })
  }
}



