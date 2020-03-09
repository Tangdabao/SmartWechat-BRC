// pages/setting/setting.js
const app = getApp()


/**
 * @brief  stringtoHex:十六进制字符串转为ArrayBuffer对象，参数为十六进制字符串
 * @param  str:
 * @retval 
 */
function stringtoHex(str) {
  str = str.toLowerCase();
  let newBuffer = new ArrayBuffer(str.length / 2);
  let hexBuffer = new Uint8Array(newBuffer);
  let h = 0,
    l = 0;
  for (let i = 0; i < str.length / 2; i++) {
    h = str.charCodeAt(2 * i);

    l = str.charCodeAt(2 * i + 1);
    if (48 <= h && h <= 57) {
      h = h - 48;
    } else {
      h = h - 97 + 10;
    }
    if (48 <= l && l <= 57) {
      l = l - 48;
    } else {
      l = l - 97 + 10;
    }
    hexBuffer[i] = h * 16 + l;
  }
  return newBuffer;
}



Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  setttingFun(e) {
   var that = this;
    console.log('setttingFun');
    console.log(app.globalData.g_turnOnVoltage);
    console.log(app.globalData.g_batteryStrings);//电池串数
    console.log(app.globalData.g_standardVoltage);//标准电压
    console.log(app.globalData.g_chargePointReturnVoltage); //充点返回电压
    console.log(app.globalData.g_overDischargeReturnVoltage); //过放返回电压
    console.log(app.globalData.g_overDischargeVoltage); //过放电压
    console.log(app.globalData.g_startOfPowerReduction); //降功开始：
    console.log(app.globalData.g_enduranceVoltage); // 续航电压：
    console.log(app.globalData.g_batteryHighTemperature);//电池高温
    console.log(app.globalData.g_batteryLowTemperature); //电池低温
  
    var str ='123'
    wx.writeBLECharacteristicValue({
      deviceId: app.globalData.g_connectedDeviceId,
      serviceId: app.globalData.g_connectedDeviceserviceId,
      characteristicId: app.globalData.g_connectedDeviceWriteChar,
      value: stringtoHex(str),
      success: (res) => {
        console.log(' wx.writeBLECharacteristicValue success', res)
      },
      fail: (res) => {
        console.log(' wx.writeBLECharacteristicValue fail', res)
      },
      complete: (res) => {
        console.log(' wx.writeBLECharacteristicValue complete', res)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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