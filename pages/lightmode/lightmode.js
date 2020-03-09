// pages/lightmode/lightmode.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //----T1------//
    timeT1Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT1: 0,

    //----T2------//
    timeT2Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT2: 0,

    //----T3------//
    timeT3Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT3: 0,

    //----T4------//
    timeT4Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT4: 0,
    //----T5------//
    timeT5Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT5: 0,
    //----T6------//
    timeT6Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT6: 0,
    //----T7------//
    timeT7Period: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT7: 0,
    //----T8------//
    morningLight: [{
      duration: '',
      power: '',
      induction: '',
      dormant: ''
    }],
    indexT8: 0,

    //------------//
    turnOnVoltage:'',//开灯电压
    powerReduction:'',//降功幅度
    onDelay:'',//开灯延时
    endurancePower:'',//续航功率
  },
  /**
   * @brief  formSubmit:t1输入格式
   * @param  str:
   * @retval 
   */
  formSubmit(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT1Period = that.data.timeT1Period;
    timeT1Period.push(e.detail.value);
    var indexT1 = that.data.indexT1;
    indexT1++;
    that.setData({
      timeT1Period,
      indexT1: indexT1
    })
    console.log(that.data.timeT1Period)
    console.log(that.data.indexT1)
  },
  /**
   * @brief  formSubmit:t1输入格式
   * @param  str:
   * @retval 
   */
  formReset(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT1Period = that.data.timeT1Period;
    timeT1Period.push(e.detail.value); //很关键
    var indexT1 = that.data.indexT1;
    indexT1++;
    that.setData({
      timeT1Period,
      indexT1: indexT1
    })
    console.log(that.data.timeT1Period)
    console.log(that.data.indexT1)
  },



  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT2(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT2Period = that.data.timeT2Period;
    timeT2Period.push(e.detail.value);
    var indexT2 = that.data.indexT2;
    indexT2++;
    that.setData({
      timeT2Period,
      indexT2: indexT2
    })
    console.log(that.data.timeT2Period)
    console.log(that.data.indexT2)
  },
  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formResetT2(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT2Period = that.data.timeT2Period;
    timeT2Period.push(e.detail.value); //很关键
    var indexT2 = that.data.indexT2;
    indexT2++;
    that.setData({
      timeT2Period,
      indexT2: indexT2
    })
    console.log(that.data.timeT2Period)
    console.log(that.data.indexT2)
  },


  /**
   * @brief  formSubmit:t3输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT3(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT3Period = that.data.timeT3Period;
    timeT3Period.push(e.detail.value);
    var indexT3 = that.data.indexT3;
    indexT3++;
    that.setData({
      timeT3Period,
      indexT3: indexT3
    })
    console.log(that.data.timeT3Period)
    console.log(that.data.indexT3)
  },
  /**
   * @brief  formSubmit:t3输入格式
   * @param  str:
   * @retval 
   */
  formResetT3(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT3Period = that.data.timeT3Period;
    timeT3Period.push(e.detail.value); //很关键
    var indexT3 = that.data.indexT3;
    indexT3++;
    that.setData({
      timeT3Period,
      indexT3: indexT3
    })
    console.log(that.data.timeT3Period)
    console.log(that.data.indexT3)
  },



  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT4(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT4Period = that.data.timeT4Period;
    timeT4Period.push(e.detail.value);
    var indexT4 = that.data.indexT4;
    indexT4++;
    that.setData({
      timeT4Period,
      indexT4: indexT4
    })
    console.log(that.data.timeT4Period)
    console.log(that.data.indexT4)
  },
  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formResetT4(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT4Period = that.data.timeT4Period;
    timeT4Period.push(e.detail.value); //很关键
    var indexT4 = that.data.indexT4;
    indexT4++;
    that.setData({
      timeT4Period,
      indexT4: indexT4
    })
    console.log(that.data.timeT4Period)
    console.log(that.data.indexT4)
  },

  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT5(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT5Period = that.data.timeT5Period;
    timeT5Period.push(e.detail.value);
    var indexT5 = that.data.indexT5;
    indexT5++;
    that.setData({
      timeT5Period,
      indexT5: indexT5
    })
    console.log(that.data.timeT5Period)
    console.log(that.data.indexT5)
  },
  /**
   * @brief  formSubmit:t5输入格式
   * @param  str:
   * @retval 
   */
  formResetT5(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT5Period = that.data.timeT5Period;
    timeT5Period.push(e.detail.value); //很关键
    var indexT5 = that.data.indexT5;
    indexT5++;
    that.setData({
      timeT5Period,
      indexT5: indexT5
    })
    console.log(that.data.timeT5Period)
    console.log(that.data.indexT5)
  },


  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT6(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT6Period = that.data.timeT6Period;
    timeT6Period.push(e.detail.value);
    var indexT6 = that.data.indexT6;
    indexT6++;
    that.setData({
      timeT6Period,
      indexT6: indexT6
    })
    console.log(that.data.timeT6Period)
    console.log(that.data.indexT6)
  },
  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formResetT6(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT6Period = that.data.timeT6Period;
    timeT6Period.push(e.detail.value); //很关键
    var indexT6 = that.data.indexT6;
    indexT6++;
    that.setData({
      timeT6Period,
      indexT6: indexT6
    })
    console.log(that.data.timeT6Period)
    console.log(that.data.indexT6)
  },


  /**
   * @brief  formSubmit:t2输入格式
   * @param  str:
   * @retval 
   */
  formSubmitT7(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let timeT7Period = that.data.timeT7Period;
    timeT7Period.push(e.detail.value);
    var indexT7 = that.data.indexT7;
    indexT7++;
    that.setData({
      timeT7Period,
      indexT7: indexT7
    })
    console.log(that.data.timeT7Period)
    console.log(that.data.indexT7)
  },
  /**
   * @brief  formSubmit:t7输入格式
   * @param  str:
   * @retval 
   */
  formResetT7(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let timeT7Period = that.data.timeT7Period;
    timeT7Period.push(e.detail.value); //很关键
    var indexT7 = that.data.indexT7;
    indexT7++;
    that.setData({
      timeT7Period,
      indexT7: indexT7
    })
    console.log(that.data.timeT7Period)
    console.log(that.data.indexT7)
  },

  /**
    * @brief  formSubmit:t8输入格式
    * @param  str:
    * @retval 
    */
  formSubmitT8(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let morningLight = that.data.morningLight;
    morningLight.push(e.detail.value);
    var indexT8 = that.data.indexT8;
    indexT8++;
    that.setData({
      morningLight,
      indexT8: indexT8
    })
    console.log(that.data.morningLight)
    console.log(that.data.indexT8)
  },
  /**
   * @brief  formSubmit:t7输入格式
   * @param  str:
   * @retval 
   */
  formResetT8(e) {
    var that = this;
    var reset = {};
    reset.duration = '';
    reset.power = '';
    reset.induction = '';
    reset.dormant = '';
    let morningLight = that.data.morningLight;
    morningLight.push(e.detail.value); //很关键
    var indexT8 = that.data.indexT8;
    indexT8++;
    that.setData({
      morningLight,
      indexT8: indexT8
    })
    console.log(that.data.morningLight)
    console.log(that.data.indexT8)
  },


  /**
    * @brief  formSubmit:t8输入格式
    * @param  str:
    * @retval 
    */
  formSubmitT9(e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    
    app.globalData.g_turnOnVoltage = e.detail.value.turnOnVoltage;
    app.globalData.powerReduction = e.detail.value.powerReduction;
    app.globalData.onDelay = e.detail.value.onDelay;
    app.globalData.endurancePower = e.detail.value.endurancePower;


    that.setData({
      turnOnVoltage: e.detail.value.turnOnVoltage,//开灯电压
      powerReduction: e.detail.value.powerReduction,//降功幅度
      onDelay: e.detail.value.onDelay,//开灯延时
      endurancePower: e.detail.value.endurancePower,//续航功率
    })

  },
  /**
   * @brief  formSubmit:t7输入格式
   * @param  str:
   * @retval 
   */
  formResetT9(e) {
    var that = this;
    that.setData({
      turnOnVoltage: '',//开灯电压
      powerReduction: '',//降功幅度
      onDelay: '',//开灯延时
      endurancePower: '',//续航功率
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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