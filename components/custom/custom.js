// components/custom/custom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // myValue: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"haha"
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    aa(){
      console.log(1111)

    },
    getrun() {
      console.log(99999)
      console.log('我是子组件的方法')
      return "哈哈"
    }

    // update: function () {
    //   // 更新 myValue
    //   this.setData({
    //     myValue: 'leaf'
    //   })
    // }

  }
})
