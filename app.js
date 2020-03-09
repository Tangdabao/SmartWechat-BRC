//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    //console.log('onLaunch')
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    receivepack:'',//接收到的数据包
    timerUnpack: '',
    timerAutoBar: '',
    timesPack: 0,
    timesPackNow: 0,
    timeCount:0,
    messagePacket: [{
      messageID:'',
      messagetype:'',
      messageTotalPacket:'',
      messageCurrentPacket:'',
      messagePayload:''
    }],
    //------BLE-------------//
    g_connectedDeviceId: "", //被连接BLE MAC
    g_disconnectedDeviceId: "", //断开连接BLE MAC
    g_connectedDeviceserviceId: "", ///连接设备服务UUID
    g_connectedDeviceReadChar: "",
    g_connectedDeviceWriteChar: "",

    //------2.4g-----------//
    deviceMac: "1234567890",
    deviceNum:0,
    //------battery-------//
    g_batteryType:'',//电池类型
    g_batteryStrings: '',//电池串数
    g_standardVoltage: '',//标准电压
    g_chargePointReturnVoltage: '',//充点返回电压
    g_overDischargeReturnVoltage: '',//过放返回电压
    g_overDischargeVoltage: '',//过放电压
    g_startOfPowerReduction: '',//降功开始：
    g_enduranceVoltage: '',// 续航电压：
    g_batteryHighTemperature: '',//电池高温
    g_batteryLowTemperature: '',//电池低温

    //------LightMode-------//
    g_turnOnVoltage: '',//开灯电压
    g_powerReduction: '',//降功幅度
    g_onDelay: '',//开灯延时
    g_endurancePower: '',//续航功率

  }
})


function checkSumFunctionT1(str) {
  console.log('Ceshi')
}