/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 2017-6-02
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */


/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl;//接口服务器

let iconBaseUrl;//图标路径

if (process.env.NODE_ENV == 'development') {//开发环境

  iconBaseUrl = 'http://localhost:8080';

  baseUrl = 'http://192.168.1.105:3000';

} else {//生产环境

  let ip = 'http://192.168.1.40';//需要部署时只需更改此IP地址

  baseUrl = ip + ':8080/lottery-controller';

  iconBaseUrl = ip + '/lottery-customer';

}

export default {
  baseUrl,
  iconBaseUrl
}
