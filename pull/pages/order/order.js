// /pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'hall',
    userName:'超超',
    orderWay:'',
    address:'范家新村某楼'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorage ({
    //   key:"orderWay",
    //   data:"支付宝"
    // });
      var that= this;
    wx.getStorage({
      key:'orderWay',
      success:function(res){
        that.setData({
          orderWay: res.data
        })
      }
    })
    // wx.getStorage({
    //   key:'orderAddress',
    //   success:function(res){
    //     console.log(res.data)
    //   }
    // })
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
  bindType: function(e) {
    // console.log(e.currentTarget.dataset.type);
  },
  selectElement: function(e) {
    var type;
    if ( this.data.type === 'hall') {
       type = 'takeout'
    } else {
      type = 'hall'
    }
    this.setData({
      type: type
    })
    // console.log(e.target.dataset.type);
    // let element_toggle =
    //  !this.data.element_toggle
    // this.setData({
    //   elementToggle: element_toggle
    // })
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

  }
})
