const app = getApp()
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


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


/**
 * @brief  sendBleData:发送数据到BLE端
 * @param  str:
 * @data  20200311
 * @retval 20字节以内
 */
function sendBleData(str) {
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
}

/**
 * @brief  sendBleDataPacket:蓝牙数据包发送函数
 * @param  待发送数据：str
 * @retval 20字节以外的大数据包
 * @data  20200211
 */
function sendBleDataPacket(str) {
  console.log('str.length', str.length);
  if (str.length < 40) {
    sendBleData(str.substr(0, str.length));
  } else {

    for (let i = 0; i < (str.length / 40); i++) {
      sendBleData(str.substr(i * 40, 40));
    }
    sendBleData(str.substr((str.length / 40) * 40, str.length % 40));
  }
}

/**
 * @brief  insertStr:字符串插入函数
 * @param  soure:原始字符串
 * @param  start：插入的起始位置
 * @param  newStr:待插入的字符串
 * @retval 
 */
function insertStr(soure, start, newStr) {

  return soure.slice(0, start) + newStr + soure.slice(start);

}

/**
 * @brief  set2_4GWorkingMode:更改2.4G工作模式 
 * @param  str:数据包
 * @retval 小程序下行到BLE
 */
function set2_4GWorkingMode(str) {
  console.log('set2_4GWorkingMode:')
  console.log(str.length)
  console.log('/----------/')
  switch (str) {
    case 'send':
      var modeBuff = "010301010200000000000000000000"
      modeBuff = insertStr(modeBuff, 10, app.globalData.deviceMac)
      sendBleDataPacket(modeBuff);
      break;
    case 'receive':
      var modeBuff = "010301010100000000000000000000"
      modeBuff = insertStr(modeBuff, 10, app.globalData.deviceMac)
      sendBleDataPacket(modeBuff);
      break;
    case 'sleep':
      var modeBuff = "010301010000000000000000000000"
      modeBuff = insertStr(modeBuff, 10, app.globalData.deviceMac)
      sendBleDataPacket(modeBuff);
      break;

    default:
      console.log('Error');
  }
}

module.exports = {
  formatTime: formatTime,
  stringtoHex: stringtoHex,
  sendBleData: sendBleData,
  insertStr: insertStr,
  sendBleDataPacket: sendBleDataPacket,
  set2_4GWorkingMode: set2_4GWorkingMode
}
