// pages/setting/setting.js
const app = getApp()
const util = require('../../utils/util.js')



Page({

  /**
   * 页面的初始数据
   */
  data: {


  },


  setttingFun(e) {
    console.log('setttingFun');
    console.log(app.globalData.g_turnOnVoltage);
    console.log(app.globalData.g_batteryStrings); //电池串数
    console.log(app.globalData.g_standardVoltage); //标准电压
    console.log(app.globalData.g_chargePointReturnVoltage); //充点返回电压
    console.log(app.globalData.g_overDischargeReturnVoltage); //过放返回电压
    console.log(app.globalData.g_overDischargeVoltage); //过放电压
    console.log(app.globalData.g_startOfPowerReduction); //降功开始：
    console.log(app.globalData.g_enduranceVoltage); // 续航电压：
    console.log(app.globalData.g_batteryHighTemperature); //电池高温
    console.log(app.globalData.g_batteryLowTemperature); //电池低温
    var str = '1'




    util.set2_4GWorkingMode('send');//设置2.4G为发送模式

    util.sendBleDataPacket(str);
    //sendBleData(str);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var str = app.globalData.g_batteryStrings + app.globalData.g_standardVoltage + app.globalData.g_chargePointReturnVoltage;
    // console.log("onLoad");
    // console.log(str);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})