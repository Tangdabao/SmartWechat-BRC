const util = require('../../utils/util.js')
const app = getApp()
// pages/findLight/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //-----2.4G---------//
    device_RF_Num: 0,
    equipmentModel: [],
    batteryVoltage: 0,
    batteryCapacity: 0,
    batteryTemperature: 0,
    batteryChargingTemperature: 0,
    lightBoardVoltage: 0,
    lightBoardPower: 0,
    loadVoltage: 0,
    loadBrightness: 0,
    loadPower: 0,
    chargePWM: 0,
    dischargePWM: 0,
    daysOfOperation: 0,
    powerOffTimes: 0,
    modificationTimes: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = util.formatTime(new Date());
    console.log(timestamp)
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
    var that = this;
    that.setData({
      device_RF_Num:app.globalData.deviceNum
    })
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

  }
})