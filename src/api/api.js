import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
const apiMall = 'https://service.emmazhang.top';
const storeageUrl = '';

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/auth/login");

// 分页查询文件列表
const queryFiles = (params) => wxRequest(params, apiMall + '/files/list/short');

const getUploadParam = (params) => wxRequest(params, apiMall + '/files/postParams');

const accessUrl = (params) => wxRequest(params, apiMall + '/files/accessUrl');

const accessUrls = (params) => wxRequest(params, apiMall + '/files/accessUrls');
export default {
  accessUrl,
  accessUrls,
  getUploadParam,
  queryFiles,
  wxJsCode2Session,
}
