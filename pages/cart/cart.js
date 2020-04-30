// pages/cart/cart.js
const WXAPI = require('apifm-wxapi')
// WXAPI.init('gooking')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // pageValue:"45555",
    copyRemark:"父组件的属性",
    nameTrans:"",
    goodsRecommend:['西瓜','香蕉','鸭梨','橙子'],
    disData:[
      {"disName":"甲状腺","questions":[{"ques":"只有一侧甲状腺有？","ans":"否"}],exclude:'除外：对甲状腺疾病及其并发症和后遗症引起的治疗除外'},
      { "disName": "甲状腺结节", "questions": [{ "ques": "是否手术？", "ans": "是" }], exclude: '除外：对甲状腺疾病及其并发症和后遗症引起的治疗除外'}
    ],
    twoList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }, {
      id: 3,
      name: '全球美食烘培原料',
      count: 12,
      twodata: [{
        'id': 15,
        'name': '秋刀鱼'
      }, {
        'id': 16,
        'name': '锡箔纸金针菇'
      }]
    }],
    lock:false,
    msg:"基本信息",
    type: 0,
    peisongType:"",
    typeItems: [
      { name: '我要退款(无需退货)', value: '0', checked: true },
      { name: '我要退货退款', value: '1' },
      { name: '我要换货', value: '2' },
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1111,this.data.goodsRecommend)
    console.log(this.data.lock)
    if(this.data.goodsRecommend.length>0){
      this.setData({
        lock:true
      })
    }
    console.log(this.data.lock)
    WXAPI.goods({
      recommendStatus: 1
    }).then(res => {
      console.log(1111,res)
      if (res.code === 0) {
        that.setData({
          goodsRecommend: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    


  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  sexChange(e){
 this.setData({
      peisongType:e.detail.value
    })
    console.log(22222,this.data.peisongType)
  },
  radioChange(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const typeItems = this.data.typeItems;
    for (var i = 0, len = typeItems.length; i < len; ++i) {
      typeItems[i].checked = typeItems[i].value == e.detail.value;
    }
    this.setData({
      typeItems: typeItems,
      type: e.detail.value
    });
    // console.log(2222,e)
   

  },
  goshop(){
    wx.switchTab({
      url: '/pages/profile/profile'
    })
  },
  onMyEvent(e){
    console.log(333,e.detail)
    this.setData({
      nameTrans: e.detail
    })
  }

})