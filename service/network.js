import {baseURL} from './config.js';
const mockData = require('../mocks/index.js')

export default function(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseURL+options.url,
      method:options.method||'get',
      data:options.data||{},
      success:resolve,
      fail:reject

    })
  })
}