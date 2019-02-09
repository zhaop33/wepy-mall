import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import {
  TOKEN
} from '@/utils/constant';

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let contentType = params.contentType || { 'Content-Type': 'application/json' };
    let token = wx.getStorageSync(TOKEN);
    if(token){
      contentType.Authorization = token;
    }
    let data = params.query || {};
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: contentType
    });
    tip.loaded();
    return res;
};


module.exports = {
    wxRequest
}
