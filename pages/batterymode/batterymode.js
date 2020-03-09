// pages/batterymode/batterymode.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //-------电池参数---------//
    batteryType:'',//电池类型
    batteryStrings: '', //电池串数
    standardVoltage: '', //标准电压
    chargePointReturnVoltage: '', //充点返回电压
    overDischargeReturnVoltage: '', //过放返回电压
    overDischargeVoltage: '', //过放电压
    startOfPowerReduction: '', //降功开始：
    enduranceVoltage: '', // 续航电压：
    batteryHighTemperature: '', //电池高温
    batteryLowTemperature: '' //电池低温
  },

  formSubmit(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    that.setData({
      batteryType: e.detail.value.w_batteryType,
      batteryStrings: e.detail.value.input, //电池串数
      standardVoltage: e.detail.value.input1, //标准电压
      chargePointReturnVoltage: e.detail.value.input2, //充点返回电压
      overDischargeReturnVoltage: e.detail.value.input3, //过放返回电压
      overDischargeVoltage: e.detail.value.input4, //过放电压
      startOfPowerReduction: e.detail.value.input5, //降功开始：
      enduranceVoltage: e.detail.value.input6, // 续航电压：
      batteryHighTemperature: e.detail.value.input7, //电池高温
      batteryLowTemperature: e.detail.value.input8 //电池低温
    })
    app.globalData.g_batteryType = e.detail.value.w_batteryType;
    app.globalData.g_batteryStrings = e.detail.value.input;
    app.globalData.g_standardVoltage = e.detail.value.input1;
    app.globalData.g_chargePointReturnVoltage = e.detail.value.input2;
    app.globalData.g_overDischargeReturnVoltage = e.detail.value.input3;
    app.globalData.g_overDischargeVoltage = e.detail.value.input4;
    app.globalData.g_startOfPowerReduction = e.detail.value.input5;
    app.globalData.g_enduranceVoltage = e.detail.value.input6;
    app.globalData.g_batteryHighTemperature = e.detail.value.input7;
    app.globalData.g_batteryLowTemperature = e.detail.value.input8;

  },

  formReset(e) {
    var that = this;
    that.setData({
      batteryType: '',//电池类型
      batteryStrings: '', //电池串数
      standardVoltage: '', //标准电压
      chargePointReturnVoltage: '', //充点返回电压
      overDischargeReturnVoltage: '', //过放返回电压
      overDischargeVoltage: '', //过放电压
      startOfPowerReduction: '', //降功开始：
      enduranceVoltage: '', // 续航电压：
      batteryHighTemperature: '', //电池高温
      batteryLowTemperature: '' //电池低温
    })

    app.globalData.g_batteryType = '';
    app.globalData.g_batteryStrings = '';
    app.globalData.g_standardVoltage = '';
    app.globalData.g_chargePointReturnVoltage = '';
    app.globalData.g_overDischargeReturnVoltage = '';
    app.globalData.g_overDischargeVoltage = '';
    app.globalData.g_startOfPowerReduction = '';
    app.globalData.g_enduranceVoltage = '';
    app.globalData.g_batteryHighTemperature = '';
    app.globalData.g_batteryLowTemperature = '';
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad');

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
    console.log('onShow');
    var that = this;
    that.setData({
      //batteryType: app.globalData.g_batteryType ,
      batteryStrings: app.globalData.g_batteryStrings, //电池串数
      standardVoltage: app.globalData.g_standardVoltage, //标准电压
      chargePointReturnVoltage: app.globalData.g_chargePointReturnVoltage, //充点返回电压
      overDischargeReturnVoltage: app.globalData.g_overDischargeReturnVoltage, //过放返回电压
      overDischargeVoltage: app.globalData.g_overDischargeVoltage, //过放电压
      startOfPowerReduction: app.globalData.g_startOfPowerReduction, //降功开始：
      enduranceVoltage: app.globalData.g_enduranceVoltage, // 续航电压：
      batteryHighTemperature: app.globalData.g_batteryHighTemperature, //电池高温
      batteryLowTemperature: app.globalData.g_batteryLowTemperature //电池低温
    })

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