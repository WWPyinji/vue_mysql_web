/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import service from './service'
/**
 * 获取会员规则
 * @type {string}
 */
const GET_MEMBERRULE = '/help/getMemberRule'



/**
 * 获取竞彩足球等开奖列表
 * @type {string}
 */
const GET_JCHISTORYBYLOTTERYID = '/lotteryHistory/getHistoryByLotteryId'
/**
 * 获取十四场，六场半，4场进球胜平负等开奖详情
 * @type {string}
 */
const GET_SJLOTTERYHISTORYDETAILS = '/lotteryHistory/getSjLotteryHistoryDetails'
/**
 * 获取期数
 * @type {string}
 */
const GET_COMPETITIONPERIODS = '/lotteryHistory/competitionPeriods'
/**
 * 每日活动接口
 * @type {string}
 */
const GET_TASKINTEGRALLOG = '/AssociatorScoreLog/getIntegralByClientId'

/**
 * 第三方账号校验
 * @type {string}
 */
const CHECK_ACCOUNT = '/thirdAccount/checkAccount'

/**
 * 第三方登录接口
 * @type {string}
 */
const THIRD_LOGIN = '/thirdAccount/thirdLogin.koala'

/**
 * 第三方注册接口
 * @type {string}
 */
const THIRD_REGISTER_LOGIN = '/thirdAccount/thirdRegisterLogin.koala'

/**
 * 用户登录接口
 */
const LOGIN = '/ClientInfo/clientLogin.koala'

/**
 * 用户注册接口
 */
const REGISTER = '/ClientInfo/add.koala'
/**
 * 修改昵称接口
 */
const NICKNAME = '/ClientInfo/update.koala'
/**
 *修改手机号接口
 */
const UPDATEMOBILE = '/ClientInfo/updateMobile.koala'
/**
 *获取未注册人短信验证码接口
 */
const MOBILE_CODE = '/mobileCode/sendMobileCode/client'
/**
 *用户登出接口
 */
const LOGOUT = '/ClientInfo/clientLogout.koala';

/**
 * 用户头像上传
 */
const HEAD_UPLOAD = '/ClientInfo/customerHeadPortraitUp.koala'

/**
 *彩民资讯轮播图接口 Carousel
 */
const CAROUSEL = '/Rotationphotoinfo/pageJson/0/100'
/**
 *彩民签到接口
 */
const SIGN = '/Signrecord/add.koala'
/**
 * 彩民签到查询接口
 */
const QUERYDAY = '/Signrecord/getContinuitySignDay.koala'
/**
 * 获取彩民积分
 */
const CLIENT_INTEGRAL = '/ClientInfo/getClientIntegralById/'

/**
 *搜索店家接口
 */
const SEARCH = '/shops/pageJson/0/100'
/**
 *绑定店家接口
 */
const BINDING = '/shops/bindShop.koala'
/*
 *设置默认店家接口
 */
const DEFAULT = '/shops/defaultShop'
/**
 *查询店家列表接口
 */
const SHOPS = '/shops/myShopsPageJson'
/**
 *店家详情接口
 */
const SHOPINFO = '/shops/shopInfo'
/**
 *拥有指定彩种的当前用户绑定的店家列表接口
 */
const APPOINT_LOTTERY_SHOPS = '/shops'
/**
 *修改密码
 */
const UPDATE_PASSWORD = '/ClientInfo/updatePassword.koala'
/**
 *微信绑定接口
 */
const UPDATE_WECHAT = '/Customerinfo/updateWeChat.koala'
/**
 *qq绑定接口
 */
const UPDATE_QQ = '/Customerinfo/updateQQ.koala'

/**
 *咨询彩种总列表接口
 */
const MESSAGELISTALL = '/SysInformation/getClientSysInformation'


/**
 *咨询单一彩种列表接口
 */
const MESSAGESINGLELIST = '/InformationController/getInformationItemByInformationId'
/**
 * 查询单一彩种资讯详情接口
 */
const MESSAGESINGLEDETAIL = '/InformationController/getInformationItemById'
/**
 *玩法介绍接口
 */
const PLAYINGMETHOD = '/lotterys/getPlayDescriptionById'
/**
 *开奖列表接口
 */
const LOTTERYHISTORY = '/lotteryHistory/getHistoryByLotteryId'
/**
 *开奖详情接口
 */
const GET_LOTTER_HISTORY = '/lotteryHistory/getLotteryHistoryDetails.koala'
/**
 *订阅列表接口
 */
const CLIENT_LOTTERY_LIST = '/clientLottery/pageJson/0/100'
/**
 *订阅推送接口
 */
const CLIENT_LOTTERY_SET = '/clientLottery/clientLotterySet'
/**
 *购彩列表接口
 */
const LOTTERYS = '/lotterys/lotterys/0/100'
/**
 *订单列表接口
 */
const ORDERLIST = '/orders'
/**
 *订单详情接口
 */
const ORDERDETAIL = '/orders/orderDetail'
/**
 * 订单催单接口
 */
const ORDERREMINDER = '/orders/orderReminder'
/**
 * 订单取消接口
 */
const ORDERCANCLE = '/orders/orderCancle'
/**
 * 订单申诉接口
 */
const ORDERCOMPLAIN = '/OrderComplain/add'
/**
 * 订单转平台接口
 */
const ORDER_CHANGEPLATFORM = '/orders/orderChangePlatform'
/**
 * 订单转店家接口
 */
const ORDER_CHANGESHOP = '/orders/orderChangeShop'
/**
 * 订单评价接口
 */
const ORDER_COMMENT = '/orders/orderComment'
/**
 * 订单反馈接口
 */
const ORDER_CIRCULATION = '/orderCirculation/add'
/**
 * 订单确定接口
 */
const ORDERCONFIRM = '/orders/orderConfirm'
/**
 * 彩民下单接口
 */
const ORDERADD = '/orders/orderAdd'

/**
 * 购彩彩种期数查询接口
 */
const PERIODS = '/lotterys'
/**
 * 彩民付款接口
 */
const ORDERPAY = '/orders/orderPay'

/**
 *账户余额查询
 */
const GET_ACCOUNT_BALANCE = '/AccountInfo/getAccountBalance'

/**
 * 账单列表
 */
const GET_ACCOUNT_LIST = '/AccountInfo/getAccountList'

/**
 * 账单详情
 */
const GET_ACCOUNT_DETAILS = '/AccountInfo/getAccountDetails'
/**
 * 手机号发送短信接口
 */
const SEND_MOBILE_CODE = '/mobileCode/sendMobileCode'
/**
 * 用户id短信接口
 */
const CLIENT = '/mobileCode/sendMobileCode/client'
/**
 * 用户手机号校验
 */
const CHECK_MOBILE_REGISTER = '/ClientInfo/checkMobileRegister'

/**
 * 彩民根据ID校验手机验证码
 * @type {string}
 */
const CHECK_MOBILE_CODE = '/ClientInfo/checkMobileCode'

/**
 * 密码找回
 * @type {string}
 */
const RETRIEVE_PWD = '/ClientInfo/retrievePwd'

/**
 * 设置支付密码
 * @type {string}
 */
const SET_UP_PAY_PASSWORD = '/AccountInfo/setUpPayPassword'

/**
 * 支付免验证接口（校验用户支付密码）
 * @type {string}
 */
const CHECK_PAY_PASSWORD = '/AccountInfo/checkPayPassword'

/**
 * 意见反馈接口
 * @type {string}
 */
const SUGGESTION = '/suggestion/add'

/**
 * 帮助接口
 * @type {string}
 */
const HELP = '/help/pageJson'

/**
 * 帮助详情接口
 * @type {string}
 */
const GET_HELP_ITEM = '/help/getHelpItem'

/**
 * 开奖结果接口（单条）
 * @type {string}
 */
const GET_NEWEST_HISTORY = '/lotteryHistory/getNewestHistoryByLotteryId'

/**
 * 线下订单下单
 * @type {string}
 */
const ORDER_LINE_ADD = '/orders/orderLineAdd'

/**
 * 线下订单下单
 * @type {string}
 */
const ORDER_LINE_PAY = '/orders/orderLinePay'
/**
 * 彩种投注规则接口
 */
const BETTING_RULES = '/lotterys'
/**
 * 竞猜足球赔率接口
 */
const FOOT_BALL = '/competitionPeriod/football'
/**
 * 竞猜篮球赔率接口
 */
const BASKET_BALL = '/competitionPeriod/basketball'
/**
 * 开奖结果走势
 * @type {string}
 */
const GET_LOTTERY_HISTORY_TREND = '/lotteryHistory/getLotteryHistoryTrend'
/**
 * 14场胜负赔率接口
 */
const SSCSF = '/competitionPeriod/sscsf'
/**
 * 6场半胜负赔率接口
 */
const LCBQCSF = '/competitionPeriod/lcbqc'
/**
 * 北京单场赔率接口
 */
const BJDC = '/competitionPeriod/bjdc'
/**
 * 四场进球
 * @type {string}
 */
const SCJQ = '/competitionPeriod/scjq/'

/**
 * 会员等级及特权查询
 * @type {string}
 */
const GET_MEMBER_PRIVILEGE = '/IntegralRule/getMemberPrivilege'

/**
 * 查询会员等级列表
 * @type {string}
 */
const GET_MEMBER_LEVEL_INFO = '/IntegralRule/getMemberLevelInfo'

/**
 * 获取最新下载地址
 * @type {string}
 */
const GET_LATEST_EDITION_URL = '/AppVersion/getLatestEditionUrl'

/**
 * 校验是否最新版本
 * @type {string}
 */
const CHECK_VERSION = '/AppVersion/checkVersion'

/**
 *  彩民消息列表接口
 * @type {string}
 */
const GET_MESSAGE_LIST = '/messageController/pageJson'

/**
 * 彩民消息详情
 * @type {string}
 */
const GET_CLIENT_MSG = '/messageController/getClientMsg'


/**
 * QQ微信解绑
 * @type {string}
 */
const UN_BUNDLING_THIRD = '/thirdAccount/unBundLingThird'

/**
 * 积分流转记录
 * @type {string}
 */
const GET_ASSOCIATOR_SCORE_LOG = '/AssociatorScoreLog/getAssociatorScoreLog'

/**
 * 校验彩民关注彩店
 * @type {string}
 */
const CHECK_CLIENT_SHOPREL = '/ClientInfo/checkClientShopRel'

export default {

  /**
   * 获取会员规则
   */
  getMemberRule: function (params, succesCallback, errorCallback) {
  service.post(GET_MEMBERRULE, params, succesCallback, errorCallback);
},
  /**
   * 获取竞彩足球等开奖列表
   */
  getJchistoryByLotteryId: function (params, succesCallback, errorCallback) {
    service.post(GET_JCHISTORYBYLOTTERYID, params, succesCallback, errorCallback);
  },
  /**
   * 获取竞彩足球等开奖列表
   */
  getSjLotteryHistoryDetails: function (params, succesCallback, errorCallback) {
    service.post(GET_SJLOTTERYHISTORYDETAILS, params, succesCallback, errorCallback);
  },
  /**
   * 获取期数
   */
  getPeriods: function (params, succesCallback, errorCallback) {
    let GET_COMPETITIONPERIODS_ADD = GET_COMPETITIONPERIODS + '/' + params.lotteryId;
    service.post(GET_COMPETITIONPERIODS_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 每日任务
   */
  getTask: function (params, succesCallback, errorCallback) {
    let GET_TASKINTEGRALLOG_ADD = GET_TASKINTEGRALLOG + '/' + params.id;
    service.post(GET_TASKINTEGRALLOG_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 4场进球
   */
  getSCJQ: function (params, succesCallback, errorCallback) {
    let SSCSF_ADD = SCJQ + params.type;
    service.post(SSCSF_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 6场胜负赔率接口
   */
  getLCBQCSF: function (params, succesCallback, errorCallback) {
    let LCBQCSF_ADD = LCBQCSF + '/' + params.type;
    service.post(LCBQCSF_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 北京单场赔率接口
   */
  getBJDC: function (params, succesCallback, errorCallback) {
    let BJDC_ADD = BJDC + '/' + params.type;
    service.post(BJDC_ADD, null, succesCallback, errorCallback);
  },

  /**
   * 14场胜负赔率接口
   */
  getSSCSF: function (params, succesCallback, errorCallback) {
    let SSCSF_ADD = SSCSF + '/' + params.type;
    service.post(SSCSF_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 竞猜篮球赔率接口
   */
  getBasketBall: function (params, succesCallback, errorCallback) {
    let BASKET_BALL_ADD = BASKET_BALL + '/' + params.type;
    service.post(BASKET_BALL_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 竞猜足球赔率接口
   */
  getFootBall: function (params, succesCallback, errorCallback) {
    let FOOT_BALL_ADD = FOOT_BALL + '/' + params.type;
    service.post(FOOT_BALL_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 彩种投注规则接口
   */
  getBettingRules: function (params, succesCallback, errorCallback) {
    let BETTING_RULES_ADD = BETTING_RULES + '/' + params.lotteryId + '/bettingRules';
    service.post(BETTING_RULES_ADD, null, succesCallback, errorCallback);
  },
  /**
   * 开奖结果接口（单条）
   */
  getNewestHistoryByLotteryId: function (params, succesCallback, errorCallback) {
    service.post(GET_NEWEST_HISTORY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 开奖结果接口（单条）
   */
  getNewestHistoryByLotteryId1: function (params, succesCallback, errorCallback) {
    service.post(GET_NEWEST_HISTORY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 用户手机号校验
   */
  checkMobileRegister: function (params, succesCallback, errorCallback) {
    let CHECK_MOBILE_REGISTER_ADD = CHECK_MOBILE_REGISTER + '/' + params.mobile;
    service.post(CHECK_MOBILE_REGISTER_ADD, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 手机号发送短信接口
   */
  sendMobileCode: function (params, succesCallback, errorCallback) {
    let SEND_MOBILE_CODE_ADD = SEND_MOBILE_CODE + '/' + params.mobile + '/' + params.hasRegistor + '/' + params.userType;
    service.post(SEND_MOBILE_CODE_ADD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 根据用户id发送短信接口
   */
  getClient: function (params, succesCallback, errorCallback) {
    let CLIENT_ADD = CLIENT + '/' + params.clientId;
    service.post(CLIENT_ADD, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 购彩列表接口
   */
  getLotterys: function (params, succesCallback, errorCallback) {
    service.post(LOTTERYS, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 开奖详情接口
   */
  getLotteryHistoryById: function (params, succesCallback, errorCallback) {
    service.post(GET_LOTTER_HISTORY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订阅列表接口
   */
  getClientLottery: function (params, succesCallback, errorCallback) {
    service.post(CLIENT_LOTTERY_LIST, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订阅接口
   */
  clientLotterySet: function (params, succesCallback, errorCallback) {
    service.post(CLIENT_LOTTERY_SET, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 开奖结果接口
   */
  lotteryHistory: function (params, succesCallback, errorCallback) {
    // let url = LOTTERYHISTORY + '/' + params.page + '/' + params.pageSize

    service.post(LOTTERYHISTORY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民登录
   */
  login: function (params, succesCallback, errorCallback) {
    service.post(LOGIN, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 微信绑定
   */
  updateWeChat: function (params, succesCallback, errorCallback) {
    service.post(UPDATE_WECHAT, params, succesCallback, errorCallback);
  }
  ,
  /**
   * QQ绑定
   */
  updateQQ: function (params, succesCallback, errorCallback) {
    service.post(UPDATE_QQ, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 修改密码
   */
  updatePassword: function (params, succesCallback, errorCallback) {
    service.post(UPDATE_PASSWORD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民注册
   */
  register: function (params, succesCallback, errorCallback) {
    service.post(REGISTER, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民修改昵称
   */
  nickName: function (params, succesCallback, errorCallback) {
    service.post(NICKNAME, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民修改手机号
   */
  updateMobile: function (params, succesCallback, errorCallback) {
    service.post(UPDATEMOBILE, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 获取未注册人短信验证码
   */
  getMobileCode: function (params, succesCallback, errorCallback) {
    service.post(MOBILE_CODE, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民登出
   */
  logOut: function (params, succesCallback, errorCallback) {
    service.post(LOGOUT, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 资讯轮播图
   */
  Carousel: function (params, succesCallback, errorCallback) {
    service.post(CAROUSEL, params, succesCallback, errorCallback);
  },
  /**
   * 彩民头像上传
   */
  headUpload: function (params, succesCallback, errorCallback) {
    service.post(HEAD_UPLOAD, params, succesCallback, errorCallback);
  },
  /**
   * 搜索店家和附近店家
   */
  searchHotel: function (params, succesCallback, errorCallback) {
    service.post(SEARCH, params, succesCallback, errorCallback);
  },
  /**
   * 绑定店家
   */
  bindingHotel: function (params, succesCallback, errorCallback) {
    service.post(BINDING, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 设为默认店家
   */
  defaultShop: function (params, succesCallback, errorCallback) {
    service.post(DEFAULT, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 查询店家列表
   */
  getShopsPageJson: function (params, succesCallback, errorCallback) {
    let SHOPS_ADDSTRING = SHOPS + '/' + params.userId + '/' + params.page + '/' + params.pagesize;
    service.post(SHOPS_ADDSTRING, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 查询店家详情
   */
  getShopsInfo: function (params, succesCallback, errorCallback) {
    let SHOPINIO_ADDSTRING = SHOPINFO + '/' + params['shopId'];
    service.post(SHOPINIO_ADDSTRING, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 指定彩种的当前用户绑定的店家列表接口
   */
  getAppointShops: function (params, succesCallback, errorCallback) {
    let APPOINT_LOTTERY_SHOPS_ADDSTRING = APPOINT_LOTTERY_SHOPS + '/' + params.userId + '/shops/' + params.lotteryId;
    service.post(APPOINT_LOTTERY_SHOPS_ADDSTRING, params.data, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民签到
   */
  sign: function (params, succesCallback, errorCallback) {
    service.post(SIGN, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民签到查询
   */
  queryDay: function (params, succesCallback, errorCallback) {
    service.post(QUERYDAY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 获取彩民积分查询
   */
  clientIntegral: function (params, succesCallback, errorCallback) {
    let CLIENT_INTEGRAL_ADDSTRING = CLIENT_INTEGRAL + params.id
    service.post(CLIENT_INTEGRAL_ADDSTRING, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 咨询彩种总列表
   */
  getMessageListAll: function (params, succesCallback, errorCallback) {
    let url = MESSAGELISTALL + '/0/100';
    service.post(url, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 查询单一彩种列表
   */
  getMessageSingleList: function (params, succesCallback, errorCallback) {
    let url = MESSAGESINGLELIST + '/' + params.page + "/" + params.pageSize
    service.post(url, params.data, succesCallback, errorCallback);
  }
  ,
  /**
   * 查询单一彩种资讯详情
   */
  getMessageSingleDetail: function (params, succesCallback, errorCallback) {
    let url = MESSAGESINGLEDETAIL + '/' + params.id
    service.post(url, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 玩法介绍
   */
  getPlayingMethod: function (params, succesCallback, errorCallback) {
    service.post(PLAYINGMETHOD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单列表
   */
  getOrderList: function (params, succesCallback, errorCallback) {
    let ORDERLIST_ADDSTRING = ORDERLIST + '/' + params.userId + '/clientPageJson/' + params.page + '/' + params.pagesize + '/' + params.status;
    service.post(ORDERLIST_ADDSTRING, params.status, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单详情
   */
  getOrderDetail: function (params, succesCallback, errorCallback) {
    let ORDERDETAIL_ADDSTRING = ORDERDETAIL + '/' + params.id;
    service.post(ORDERDETAIL_ADDSTRING, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单催单
   */
  getOrderReminder: function (params, succesCallback, errorCallback) {
    service.post(ORDERREMINDER, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单取消
   */
  getOrderCancle: function (params, succesCallback, errorCallback) {
    service.post(ORDERCANCLE, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单申诉
   */
  getOrderComplain: function (params, succesCallback, errorCallback) {
    service.post(ORDERCOMPLAIN, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单转平台
   */
  getOrderChangePlatform: function (params, succesCallback, errorCallback) {
    let ORDER_CHANGEPLATFORM_ADDSTRING = ORDER_CHANGEPLATFORM + '/' + params.orderId;
    service.post(ORDER_CHANGEPLATFORM_ADDSTRING, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单转店家
   */
  getOrderChangeshop: function (params, succesCallback, errorCallback) {
    service.post(ORDER_CHANGESHOP, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单评论
   */
  getOrderComment: function (params, succesCallback, errorCallback) {
    service.post(ORDER_COMMENT, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单反馈
   */
  getOrderCirculation: function (params, succesCallback, errorCallback) {
    service.post(ORDER_CIRCULATION, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 订单确定
   */
  getOrderConfirm: function (params, succesCallback, errorCallback) {
    service.post(ORDERCONFIRM, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民下单接口
   */
  orderAdd: function (params, succesCallback, errorCallback) {
    service.post(ORDERADD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 购彩彩种期数查询接口
   */
  queryPeriods: function (params, succesCallback, errorCallback) {
    let PERIODSNUMBER = PERIODS + '/' + params.lotteryId + '/lotteryPeriodNumber';
    service.post(PERIODSNUMBER, null, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民付款接口
   */
  orderPay: function (params, succesCallback, errorCallback) {
    service.post(ORDERPAY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 用户账户余额
   */
  getAccountBalance: function (params, succesCallback, errorCallback) {
    service.post(GET_ACCOUNT_BALANCE, params, succesCallback, errorCallback);
  },
  /**
   * 用户账单列表查询
   */
  getAccountList: function (params, succesCallback, errorCallback) {
    let url = GET_ACCOUNT_LIST + '/' + params.type + '/' + params.userId + '/' + params.page + '/' + params.pageSize;
    service.post(url, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 用户账单详情查询
   */
  getAccountDetails: function (params, succesCallback, errorCallback) {
    service.post(GET_ACCOUNT_DETAILS, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 彩民根据ID校验手机验证码
   */
  checkMobileCode: function (params, succesCallback, errorCallback) {
    service.post(CHECK_MOBILE_CODE, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 密码找回
   */
  retrievePwd: function (params, succesCallback, errorCallback) {
    service.post(RETRIEVE_PWD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 设置支付密码
   */
  setUppayPassword: function (params, succesCallback, errorCallback) {
    service.post(SET_UP_PAY_PASSWORD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 支付免验证接口（校验用户支付密码）
   */
  checkPayPassword: function (params, succesCallback, errorCallback) {
    service.post(CHECK_PAY_PASSWORD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 意见反馈接口
   */
  suggestion: function (params, succesCallback, errorCallback) {
    service.post(SUGGESTION, params, succesCallback, errorCallback);
  },
  /**
   * 帮助接口
   */
  getHelpList: function (params, succesCallback, errorCallback) {
    let url = HELP + '/' + params.appType + '/' + params.userType + '/' + params.appVersion + '/' + params.page + '/' + params.pagesize
    service.post(url, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 帮助详情接口
   */
  getHelpItem: function (params, succesCallback, errorCallback) {
    let url = GET_HELP_ITEM + '/' + params.id
    service.post(url, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 线下订单下单接口
   */
  orderLineAdd: function (params, succesCallback, errorCallback) {
    service.post(ORDER_LINE_ADD, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 线下订单支付接口
   */
  orderLinePay: function (params, succesCallback, errorCallback) {
    service.post(ORDER_LINE_PAY, params, succesCallback, errorCallback);
  }
  ,
  /**
   * 开奖结果走势接口
   */
  getLotteryHistoryTrend: function (params, succesCallback, errorCallback) {
    service.post(GET_LOTTERY_HISTORY_TREND, params, succesCallback, errorCallback);
  },
  /**
   * 会员等级及特权查询
   */
  getMemberPrivilege: function (params, succesCallback, errorCallback) {
    service.post(GET_MEMBER_PRIVILEGE, params, succesCallback, errorCallback);
  },
  /**
   * 会员等级列表查询
   */
  getMemberLevelInfo: function (params, succesCallback, errorCallback) {
    service.post(GET_MEMBER_LEVEL_INFO, params, succesCallback, errorCallback);
  },
  /**
   * 第三方账号是否已绑定校验接口
   */
  checkAccount: function (params, succesCallback, errorCallback) {
    service.post(CHECK_ACCOUNT, params, succesCallback, errorCallback);
  },
  /**
   * 第三方登录接口
   */
  thirdLogin: function (params, succesCallback, errorCallback) {
    service.post(THIRD_LOGIN, params, succesCallback, errorCallback);
  },
  /**
   * 第三方注册接口
   */
  thirdRegisterLogin: function (params, succesCallback, errorCallback) {
    service.post(THIRD_REGISTER_LOGIN, params, succesCallback, errorCallback);
  },
  /**
   * 获取最新下载地址
   */
  getLatestEditionUrl: function (params, succesCallback, errorCallback) {
    service.post(GET_LATEST_EDITION_URL, params, succesCallback, errorCallback);
  },
  /**
   * 校验是否最新版本
   */
  checkVersion: function (params, succesCallback, errorCallback) {
    service.post(CHECK_VERSION, params, succesCallback, errorCallback);
  },
  /**
   * 彩民消息列表接口
   */
  getMyMessageList: function (params, succesCallback, errorCallback) {
    let url = GET_MESSAGE_LIST + '/' + params.clientId + '/' + params.page + '/' + params.pageSize
    service.post(url, params, succesCallback, errorCallback);
  },
  /**
   * 彩民消息详情
   */
  getClientMsg: function (params, succesCallback, errorCallback) {
    let url = GET_CLIENT_MSG + '/' + params.id
    service.post(url, params, succesCallback, errorCallback);
  },
  /**
   * QQ微信解绑
   */
  unBundLingThird: function (params, succesCallback, errorCallback) {
    service.post(UN_BUNDLING_THIRD, params, succesCallback, errorCallback);
  },
  /**
   * 积分流转记录
   */
  getAssociatorScoreLog: function (params, succesCallback, errorCallback) {
    let url = GET_ASSOCIATOR_SCORE_LOG + '/' + params.clientId + '/' + params.page + '/' + params.pageSize
    service.post(url, params, succesCallback, errorCallback);
  },
  /**
   * 校验彩民关注彩店
   */
  checkClientShopRel: function (params, succesCallback, errorCallback) {
    service.post(CHECK_CLIENT_SHOPREL, params, succesCallback, errorCallback);
  }
}




