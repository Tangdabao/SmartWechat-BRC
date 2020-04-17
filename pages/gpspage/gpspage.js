
Page({
  longitude: "",
  latitude: "",
  onShareAppMessage() {
    return {
      title: '查看位置',
      path: 'page/API/pages/open-location/open-location'
    }
  },
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    const that = this
    wx.getLocation({
      success(res) {
        console.log(res)

        that.setData({

          longitude: res.longitude,
          latitude: res.latitude

        })
        // hasLocation: true,
        // location: formatLocation(res.longitude, res.latitude)
        // })

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
  openLocation(e) {
    console.log(e)
    const value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
