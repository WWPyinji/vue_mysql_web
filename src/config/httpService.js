/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates.
 */

import service from './service'
/**
 * 获取用户所有blog----博客名，评论数，star数，博客类型(vue-nodejs)----：/get_all_blog {id:'用户名'}
 * @type {string}
 */
const GET_ALL_BLOG = '/get_all_blog';
/**
 * 获取信息
 * @type {string}
 */
const GET_MSG = '/get_msg';





export default {
  /**
   * 获取用户所有blog----博客名，评论数，star数，博客类型(vue-nodejs)----：/get_all_blog {id:'用户名'}
   * @type {string}
   */
  GET_ALL_BLOG: function (params, succesCallback, errorCallback) {
    service.post(GET_ALL_BLOG, params, succesCallback, errorCallback);
  },
  /**
   * 获取信息
   */
  get_msg: function (params, succesCallback, errorCallback) {
    service.post(GET_MSG, params, succesCallback, errorCallback);
  }
}




