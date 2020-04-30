Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  shopBtn: function () {
    wx.showModal({
      title: '抢购',
      content: '确定是否抢购',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      }
    })

  },
})