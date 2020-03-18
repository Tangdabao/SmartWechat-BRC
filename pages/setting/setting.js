// pages/setting/setting.js
const app = getApp()
const util = require('../../utils/util.js')


/**
 * @brief  complemenZeroMode:补0函数，当输入的字符位1位时，补一位0，用于Hex发送
 * @param  No
 * @retval 暂时废弃
 */
function complemenZeroMode(str)
{
  if(str.length == 1)
  {
    str = '0' + str;
  }

   return str;
}
/**
 * @brief  operating_ReducedPowerMode:操作模式与降功率模式合并函数
 * @param  No
 * @retval 暂时废弃
 */
function operating_ReducedPowerMode(opera, redce) {
  var opera_data = 0;
  var redce_data = 0;
  switch (opera) {
    case '0':
      opera_data = 0;
      break;
    case '1':
      opera_data = 16;
      break;
    case '2':
      opera_data = 32;
      break;
    case '3':
      opera_data = 48;
      break;
  }

  switch (redce) {
    case '0':
      redce_data = opera_data + 0;
      break;
    case '1':
      redce_data = opera_data + 1;
      break;
    case '2':
      redce_data = opera_data + 2;
      break;
    case '3':
      redce_data = opera_data + 3;
      break;
  }
  app.globalData.g_modeSwitch = redce_data.toString(16);

  console.log(app.globalData.g_modeSwitch);

}


/**
 * @brief  switch_Light
 * @param  No
 * @retval 根据协议输入W数为偶数，下发出去的数据为实际W数除以2
 *         请注意Light必须为偶数
 */
function switch_Light(power, light) {
  var light_num = 0;
  light_num = parseInt(light) / 2;
  if (power == '1') {
    light_num = light_num + 128;

  }

  light = light_num.toString(16);
  if (light.length == 1) {
    light = '0' + light;
  }
  return light;
}

/**
 * @brief  voltagetoString:电压值转换成字符串数据
 * @param  vol:电压值：1V 1.2V 1.23V 12.3V等
 * @retval 
 */
function voltagetoString(vol) {
  let num;
  var decimalPosition;
  //console.log(vol.length);
  //判断输入电压数据长度，如果长度大于4，截取前4字节，后面字节丢弃
  if (vol.length > 4) {
    vol = vol.slice(0, 4);
  }

  decimalPosition = vol.indexOf("."); //获取小数点位置
  //console.log(decimalPosition);//log

  if (decimalPosition != -1) { //有小数点

    if ((vol.length == 4) && (decimalPosition == 1)) //判断小数位数 1.23V
    {
      vol = vol.slice(0, 3);
    }
    num = parseInt(vol.replace(".", "")); //去掉小数点

  } else {
    //1V 2V 3V ...
    num = parseInt(vol) * 10; //输入值为实际的电压值，需要转换成数值型*10
  }

  if (num > 255) //防止16进制溢出，现在仅一个字节
    num = 255;

  num = num.toString(16);

  if (num.length == 1) //补位
  {
    num = '0' + num;
  }

  return num;
}

/**
 * @brief  temperatureToString:温度值转换成字符串
 * @param  temp：温度值 Lg：12℃/-12℃
 * @retval  温度的字符串值
 * @note  暂时不支持小数温度，请出入温度的整数倍
 */
function temperatureToString(temp) {
  //判断是否为负温度
  let num;
  if (temp.indexOf("-") != -1) { //负温度
    temp = temp.slice(1);
    num = parseInt(temp)
    num = num + 128; //负温度+0x80
  } else //正温度
  {
    num = parseInt(temp)
  }
  num = num.toString(16);
  if (num > 255) //防止16进制溢出，现在仅一个字节
    num = 255;

  if (num.length == 1) //补位
  {
    num = '0' + num;
  }
  return num;
}


Page({

  /**
   * 页面的初始数据
   */
  data: {


  },


  setttingFun(e) {
    console.log('setttingFun');
    //console.log(app.globalData.g_turnOnVoltage);
    //console.log(app.globalData.g_batteryStrings); //电池串数
    //console.log(app.globalData.g_standardVoltage); //标准电压
    //console.log(app.globalData.g_chargePointReturnVoltage); //充点返回电压
    //console.log(app.globalData.g_overDischargeReturnVoltage); //过放返回电压
    //console.log(app.globalData.g_overDischargeVoltage); //过放电压
    //console.log(app.globalData.g_startOfPowerReduction); //降功开始：
    //console.log(app.globalData.g_enduranceVoltage); // 续航电压：
    //console.log(app.globalData.g_batteryHighTemperature); //电池高温
    //console.log(app.globalData.g_batteryLowTemperature); //电池低温

    util.set2_4GWorkingMode('send'); //设置2.4G为发送模式

    var str = '09020201ff'
    str = util.insertStr(str, 10, app.globalData.deviceMac)
    str = str +
      '00' + //频道
      'ea' + //随机数
      '22' + //功能码
      '01' + //长度
      app.globalData.g_batteryType + //电池类型
      '00' + //设备型号
      '00' + //超压保护
      '00' + //充电限制    
      voltagetoString(app.globalData.g_standardVoltage) + //标准电压
      voltagetoString(app.globalData.g_chargePointReturnVoltage); //充电返回电压 
    //console.log(str);    
    util.sendBleDataPacket(str);

    var str = '09020202'
    str = str +
      '00' + //提升充电压
      '00' + //直充电压
      '00' + //浮冲电压
      voltagetoString(app.globalData.g_overDischargeReturnVoltage) + //过放反冲电压
      voltagetoString(app.globalData.g_overDischargeVoltage) + //过放电压
      temperatureToString(app.globalData.g_batteryLowTemperature) + //最低温
      temperatureToString(app.globalData.g_batteryHighTemperature) + //最高温
      '00' + //降功率开始电压
      '00' + //标准满电电压小数
      '00' + //充电返回电压小数
      '00' + //过放返回电压小数
      '00' + //过放电压小数
      '00' + //降功率开始电压
      '00' + //降功率终止电压
      '00' + //降功率终止电压小数
      '00'; //校验和
    util.sendBleDataPacket(str);

    var str = '09020201ff'
    str = util.insertStr(str, 10, app.globalData.deviceMac)
    str = str +
      '00' + //频道
      'ea' + //随机数
      '24' + //功能码
      '00' + //长度
      app.globalData.g_powerReduction + app.globalData.g_modeSwitch +  //Mode
      complemenZeroMode(app.globalData.g_T1_duration) + switch_Light(app.globalData.g_T1_induction, app.globalData.g_T1_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T2_duration) + switch_Light(app.globalData.g_T2_induction, app.globalData.g_T2_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T3_duration) ;
    util.sendBleDataPacket(str);

    var str = '09020202'
    str = str + switch_Light(app.globalData.g_T3_induction, app.globalData.g_T3_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T4_duration) + switch_Light(app.globalData.g_T4_induction, app.globalData.g_T4_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T5_duration) + switch_Light(app.globalData.g_T5_induction, app.globalData.g_T5_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T6_duration) + switch_Light(app.globalData.g_T6_induction, app.globalData.g_T6_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T7_duration) + switch_Light(app.globalData.g_T7_induction, app.globalData.g_T7_power) + //时长+感应开关+亮度
      complemenZeroMode(app.globalData.g_T0_duration) + switch_Light(app.globalData.g_T0_induction, app.globalData.g_T0_power) + //时长+感应开关+亮度
      '00' + //光控延时
      '00' +  //休眠亮度
      '00' +  //非时段感应亮度和开关
      '00' ;   //光控电压  
    util.sendBleDataPacket(str);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var str = app.globalData.g_batteryStrings + app.globalData.g_standardVoltage + app.globalData.g_chargePointReturnVoltage;
    console.log("onLoad");
    //测试电压转换成字符串发送函数
    //console.log(app.globalData.g_standardVoltage);
    //var str = '12345678900'
    //str = str + voltagetoString(app.globalData.g_standardVoltage); 
    // console.log(str);//数值转换成Hex
    //app.globalData.g_modeSwitch = '1'
    //app.globalData.g_powerReduction = '10'
    //console.log(app.globalData.g_modeSwitch + app.globalData.g_powerReduction);
    //console.log(switch_Light(app.globalData.g_modeSwitch, app.globalData.g_powerReduction))
    var str ='0001020304050607080910111213141516171819'
    util.sendBleDataPacket(str);

    //temperatureToString();

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