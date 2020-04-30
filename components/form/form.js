// components/form/form.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    paramAtoB:{
      type:String,
      value:"default value"
      }

  },

  /**
   * 组件的初始数据
   */
  data: {
    name:"",
    price:2,
    amount:1,
    priceall:0

  },
  observers:{
    "name": function (newVal){
      console.log(newVal)
    },
    "amount":function(val){
      console.log(val)
    },
    "price,amount": function (price, amount){
      this.setData({
        priceall:amount*price
      })

    }
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changee(e){
      let amounts=e.detail.value;
      this.setData({
        amount: amounts
      })
    },
    inputEdit:function(e){
      // console.log(e)
      var value=e.detail.value;
      this.setData({
        name: value
      })
      // console.log(this.data.name)
      this.triggerEvent('myEvent', this.data.name)


    },
    // onTap(){
    //   console.log(this.data.name)
    //   this.triggerEvent('myEvent', this.data.name)
    // }

  }
})
