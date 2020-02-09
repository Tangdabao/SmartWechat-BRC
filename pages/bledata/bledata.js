/** 
 *******************************************************************************
 * @file     : bledata
 * @details  ：BLE数据传输
 * @author   ：Tyler   
 * @嵌入式配套代码：D:\Study\ST_BLE\BlueNRG-1_2 DK 3.1.0\Project\BLE_Examples\BLE_Chat\src
 ******************************************************************************
 */

const app = getApp()

/* 全局变量存储区域 */
var delayTimer = 1; //start 1s timer 1s的TimerID
var sendataTimer = 2;//发送数据定时器
var receivedataTimer = 3;//接收数据定时器
var flag = true;
var device_Rssi = -200;
var isnotExist = true;
/******************/


/**函数声明存储区域 */
//add you code

/******************/



/**函数实现存储区域 */
//add you code

/******************/



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
 * @brief  inArray：比较数组长度与内容
 * @param  arr: 
 * @param  key: 
 * @param  val: 
 * @retval 
 */
function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {}
  }
  return -1;
}


/**
 * @brief  testab2hex：ArrayBuffer转16进度字符串示例
 * @param  buffer:
 * @param  function:
 * @retval 
 */
function testab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}




/**
 * @brief  char2buf：
 * @param  str:
 * @param  function:
 * @retval 
 */
function char2buf(str) {
  var out = new ArrayBuffer(str.length * 2);
  var u16a = new Uint16Array(out);
  var strs = str.split("");
  for (var i = 0; i < strs.length; i++) {
    u16a[i] = strs[i].charCodeAt();
  }
  return out;
}


/**
 * @brief  strToBinary:
 * @param  str:
 * @param  function:
 * @retval 
 */
function strToBinary(str) {
  var result = [];
  var list = str.split("");
  for (var i = 0; i < list.length; i++) {
    if (i != 0) {
      result.push(" ");
    }
    var item = list[i];
    var binaryStr12 = item.charCodeAt().toString(2);
    result.push(binaryStr12);
  }
  return result.join("");
}



/**
 * @brief  str2ab:字符串转字符串ArrayBuffer
 * @param  str:
 * @param  function:
 * @retval 
 */
function str2ab(s, f) {
  var b = new Blob([s], {
    type: 'text/plain'
  });
  var r = new FileReader();
  r.readAsArrayBuffer(b);
  r.onload = function() {
    if (f) f.call(null, r.result)
  }
}

function concatenate(resultConstructor, ...arrays) {
  let totalLength = 0;
  for (let arr of arrays) {
    totalLength += arr.length;
  }
  let result = new resultConstructor(totalLength);
  let offset = 0;
  for (let arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}


/**
 * @brief  set2_4GWorkingMode:更改2.4G工作模式 
 * @param  str:数据包
 * @retval 小程序下行到BLE
 */
function set2_4GWorkingMode(str)
{
  //  add you code


}

/**
 * @brief  readBLEDataParameters:读取BLE本身数据、工作模式、其他
 * @param  str:数据包
 * @retval BLE上行到小程序
 */
function readBLEDataParameters(str)
{

  console.log('readBLEDataParameters:')
  console.log(str.length)
  console.log('/----------/')
  app.globalData.messagePacket.messagetype = str[0] + str[1];
  app.globalData.messagePacket.messageTotalPacket = str[2] + str[3];
  app.globalData.messagePacket.messageCurrentPacket = str[4] + str[5];
  console.log(`电池电量0x${str[6]}${str[7]}${str[8]}${str[9]}`)

  console.log(`电池电量百分比${str[10]}${str[11]}%`)

  console.log(`2.4G工作状态${str[12]}${str[13]}`)
  switch(str[12]+str[13])
  {
    case '00':
      console.log('休眠')
      break;

    case '01':
      console.log('接收')
      break;

    case '02':
      console.log('发送')
      break;  
  } 
  console.log(`2.4G地址: 0x${str[14]}${str[15]}:0x${str[16]}${str[17]}:0x${str[18]}${str[19]}:0x${str[20]}${str[21]}:0x${str[22]}${str[23]}`) 
  console.log(`2.4G频道${str[11]}.${str[13]}`) 



}

/**
 * @brief  packet2_4GTransmission:2.4G上下行数据解析
 * @param  str:数据包
 * @retval  问题：如果有两包数据，下一包数据是帧头帧尾+数据过来，还是单数据，那500ms延时是不是多余？？因为是自动已经拼包了的
 */
function packet2_4GTransmission(str)
{
  console.log('packet2_4GTransmission:')
  console.log(str.length)
  console.log('/----------/')
  app.globalData.messagePacket.messagetype = str[0] + str[1];
  app.globalData.messagePacket.messageTotalPacket = str[2] + str[3];
  app.globalData.messagePacket.messageCurrentPacket = str[4] + str[5];
  if (app.globalData.messagePacket.messagetype =='01')//数据上行
  {

  }
  else if (app.globalData.messagePacket.messagetype == '02')//数据下行
  {

  }
  else
  {
    console.log('无效数据包');
  }
}

/**
 * @brief  systemParameters:系统数据分析
 * @param  str:数据包
 * @retval 
 */
function systemParameters(str)
{
  console.log('systemParameters:')
  console.log(str.length)
  console.log('/----------/')
  app.globalData.messagePacket.messagetype = str[0] + str[1];
  app.globalData.messagePacket.messageTotalPacket =str[2]+str[3];
  app.globalData.messagePacket.messageCurrentPacket = str[4]+str[5];
  console.log(`硬件版本V${str[7]}.${str[9]}`) 
  console.log(`软件版本V${str[11]}.${str[13]}`) 
}



/**
 * @brief  cmdLineProcess:数据分析状态机
 * @param  str:数据包
 * @retval 
 */
function cmdLineProcess(str)
{
  console.log('cmdLineProcess:')
  console.log(str.length)
  console.log(str.substr(2, str.length - 2))
  console.log('/----------/')
  app.globalData.messagePacket.messageID = '02';//xiaoxiID
  if ((str[0] + str[1]) == app.globalData.messagePacket.messageID)
  {
    switch (str[2] + str[3])
    {
      case '00'://系统参数
        systemParameters(str.substr(2, str.length - 2));
      break;
      case '01'://射频数据透传上行
        packet2_4GTransmission(str.substr(2, str.length - 2));
        break;
      case '02'://射频数据透传下行
        packet2_4GTransmission(str.substr(2, str.length - 2));
        break;
      case '03'://更改2.4G的工作模式
        //set2_4GWorkingMode(str.substr(2, str.length - 2));//数据下行
        break;
      case '04'://蓝牙自身运行数据上传
        readBLEDataParameters(str.substr(2, str.length - 2));
        break;

      default:
        console.log('Error');
    }
  }else
  {
    console.log('CMD ERROR');
  }



}
/**时间回调函数 */
function ms_Function_callback() {
  console.log("ms_Function_callback")
}
/******************/
Page({
  /**数据变量名存储区域 */
  data: {
    //-----BLE Status---------//
    BatStatus: false, //电池状态 Bool
    //LedStatus: false,                 //LED状态 Bool，暂时关闭
    ConnectStats: "", //连接状态
    temperature: "--.--", //温度显示

    //-----BLE data---------//
    receive_data: "", //接收数据
    send_data: "", //发送数据
    countTx: 0,
    countTxFrame: 0,
    countRx: 0,
    countRxFrame: 0,

    //-----BLE UID---------//
    connectedDeviceId: "", //被连接BLE MAC
    disconnectedDeviceId: "", //断开连接BLE MAC
    connectedDeviceserviceId: "", ///连接设备服务UUID
    connectedDeviceReadChar: "",
    connectedDeviceWriteChar: "",
    connectedDeviceTempChar: "",
    connectedDeviceBattStatusChar: "",
    connectedDeviceLedPwmChar: "",

    //-----2.4G---------//
    device_RF_Num: 0,

    //-----hex Input ------------//
    hexArr1: ["0", "1", "2", "3", "4", "5", "6"],
    hexArr2: ["7", "8", "9", "A", "B", "C"],
    hexArr3: ["D", "E", "F"],
    hexStr2: ["bs"],
    hexStr3: ["send"],
    pageBackgroundColor: 0, //收发列表背景色
    inputBackgroundColor: 0, //输入框颜色

    //-----Image-----------//
    imageTemperature: '../../image/ImagerTemperature.jpg'
  },
  /******************/



  //******第一个生命周期，检查蓝牙是否打开*******//
  onLoad: function() {
    var that = this;
    that.setData({
      ConnectStats: "未连接"
    })
    
    //var testStr ='020001010102020200'
    var testStr = '0204010101000000F0F0F0F0F000'
    cmdLineProcess(testStr);
    //测试1s的定时器
    //delayTimer = setInterval(ms_Function_callback, 1000)
    //console.log("Start delay");

    //******获取BLE适配器*******//
    wx.openBluetoothAdapter({
      success: function(res) {
        // success
        console.log("-----openBluetoothAdapter success----------");
        console.log(res);
        //******开始搜索*******//
        wx.startBluetoothDevicesDiscovery({
          services: [],
          success: function(res) {
            // success
            console.log("-----startBluetoothDevicesDiscovery--success----------");
            console.log(res);
          },
          fail: function(res) {
            // fail
            console.log("-----startBluetoothDevicesDiscovery--fail-----------");
            console.log(res);
            wx.showModal({
              title: '提示',
              content: '请打开手机蓝牙并下拉刷新'
            })
          },
          complete: function(res) {
            // complete
            console.log(res);
          }
        })
        //*********************//
      },
      fail: function(res) {
        console.log("-----openBluetoothAdapter fail----------");
        // fail
        console.log(res);
        wx.showModal({
          title: '提示',
          content: '请打开手机蓝牙并下拉刷新'
        })
      },
      complete: function(res) {
        // complete
        console.log("-----complete----------");
        console.log(res);
      }
    })
    //*********************//



    //******如果开启蓝牙，主动扫描一次*******//
    wx.getBluetoothDevices({
      success: function(res) {
        console.log("getBluetoothDevices");
        console.log(res);
        that.setData({
          list: res.devices
        });
        console.log(that.data.list);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    //*********************//
  },
  //*********************//



  //******2.下拉刷新*******//
  onPullDownRefresh: function() {
    var that = this
    console.log("刷新成功")
    device_Rssi = -200;
    //监听低功耗蓝牙连接的错误事件，开发者主动连接或断开连接，设备丢失，连接异常断开等等
    wx.onBLEConnectionStateChanged(function(res) {
      console.log('onBLEConnectionStateChanged');
      console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
      that.setData({
        disconnectedDeviceId: res.deviceId
      })
      if (res.connected == false) {
        that.setData({
          ConnectStats: "未连接"
        })

      } else {
        that.setData({
          ConnectStats: "连接成功"
        })
      }
    })


    //******获取蓝牙适配器状态，如果未开启，再次提示刷新*******//
    wx.getBluetoothAdapterState({
      success: function(res) {
        console.log("getBluetoothAdapterState");
        console.log(res);
        //******适配器可用，进行下一个步骤*******//
        if (res.available) //
        {
          console.log("Success");
          //******适配器OK的情况下，开始搜索*******//
          wx.startBluetoothDevicesDiscovery({
            services: [],
            success: function(res) {
              // success
              console.log("-----startBluetoothDevicesDiscovery--success----------");
              console.log(res);
            },
            fail: function(res) {
              // fail
              console.log("-----startBluetoothDevicesDiscovery--fail-----------");
              console.log(res);
              wx.showModal({
                title: '提示',
                content: '请打开手机蓝牙并下拉刷新'
              })
            },
            complete: function(res) {
              // complete
              console.log(res);
            }
          })

          //*********************//
          //******获取搜索到的设备*******//
          wx.getBluetoothDevices({
            // wx.onBluetoothDeviceFound({
            success: function(res) {
              console.log("getBluetoothDevices");
              console.log(res.devices.length);
              console.log(res.devices);
              //轮训检查所有的设备名称与最大RSSI
              for (var i = 0; i < res.devices.length; ++i) {
                if (res.devices[i].localName == "BlueNRG1_Chat") {
                  console.log("BlueNRG1_Chat Success");
                  console.log('设备MAC：' + res.devices[i].deviceId);
                  console.log('设备RSSI：' + res.devices[i].RSSI);
                  if (device_Rssi < res.devices[i].RSSI) {
                    device_Rssi = res.devices[i].RSSI;

                  } else {
                    device_Rssi = device_Rssi;
                  }
                }
              }
              //*********************//
              console.log('设备MAX_RSSI：' + device_Rssi);
              //轮训查询最大RSSI对应的MAC
              for (var i = 0; i < res.devices.length; ++i) {
                if (device_Rssi == res.devices[i].RSSI) {
                  //判断是否是已经异常断开设备
                  if (that.data.disconnectedDeviceId == res.devices[i].deviceId) {
                    that.setData({
                      //connectedDeviceId: null
                    })

                  } else {
                    that.setData({
                      connectedDeviceId: res.devices[i].deviceId
                    })

                    //******获取到设备之后，关闭扫描，防止浪费资源*******//
                    wx.stopBluetoothDevicesDiscovery({
                      success(res) {
                        console.log(res)
                      }
                    })
                    //*********************//
                    break;
                  }
                }
              }
              //*********************//



              //******开始蓝牙连接*******//
              wx.createBLEConnection({
                deviceId: that.data.connectedDeviceId,
                success: function(res) {
                  console.log(res.errMsg);
                  console.log('设备MAC:');
                  that.setData({
                    ConnectStats: "连接成功"
                  })


                  //******连接的情况下，开始扫描设备的Service*******//
                  //******开一个1S的定时器，一直在扫描Service*******//
                  //******直到Service扫描成功，关闭定时器*******//
                  delayTimer = setInterval(function() {
                    console.log("Timer")
                    wx.getBLEDeviceServices({
                      deviceId: that.data.connectedDeviceId,
                      success: function(res) {
                        console.log(res.services)
                        console.log('设备service:');
                        clearInterval(delayTimer)
                        that.setData({
                          connectedDeviceserviceId: res.services[0].uuid
                        });
                        //console.log('设备UUID:' + that.data.connectedDeviceserviceId);
                        //******获取第一个服务的所有特性*******//
                        wx.getBLEDeviceCharacteristics({
                          deviceId: that.data.connectedDeviceId,
                          serviceId: that.data.connectedDeviceserviceId,
                          success: function(res) {
                            console.log(res.characteristics)
                            console.log('One characteristics');
                            that.setData({
                              connectedDeviceReadChar: res.characteristics[0].uuid,
                              connectedDeviceWriteChar: res.characteristics[1].uuid,
                            });

                            //******开启透传的通知*******//
                            wx.notifyBLECharacteristicValueChange({
                              state: true, // 启用 notify 功能  
                              deviceId: that.data.connectedDeviceId,
                              serviceId: that.data.connectedDeviceserviceId,
                              characteristicId: that.data.connectedDeviceReadChar,
                              success: function(res) {
                                console.log('notifyBLECharacteristicValueChange success', res.errMsg)
                              },
                              fail: function() {
                                console.log("one getBLEDeviceCharacteristicss失败");
                              },
                              complete: function() {
                                console.log("one getBLEDeviceCharacteristics结束");
                              }
                            })
                            //*********************//
                          },
                          fail: function() {
                            console.log("one getBLEDeviceCharacteristicss失败");
                          },
                          complete: function() {
                            console.log("one getBLEDeviceCharacteristics结束");
                          }
                        })
                        //*********************//
                        //*********************//
                      },
                      fail: function() {
                        console.log("getBLEDeviceServices调用失败");
                      },
                      complete: function() {
                        console.log("getBLEDeviceServices调用结束");
                      }
                    })
                  }, 1000)
                  //*********************//
                },
                fail: function() {
                  console.log("调用失败");
                },
                complete: function() {
                  console.log("调用结束");
                }
              })
              //*********************//
            },
            fail: function(res) {
              // fail
            },
            complete: function(res) {
              // complete
            }
          })
          //*********************//
        } else {
          console.log("Fail");
          wx.showModal({
            title: '提示',
            content: '请打开手机蓝牙并下拉刷新'
          })
        }
        //*********************//
      },
      fail: function(res) {
        // fail
        console.log("getBluetoothAdapterState Fail");
        wx.showModal({
          title: '提示',
          content: '请打开手机蓝牙并下拉刷新'
        })
      },
      complete: function(res) {
        // complete
        console.log("getBluetoothAdapterState Com");
      }
    })
    //*********************//
    wx.stopPullDownRefresh() //停止刷新



    //*********************//
    //******读取数据*******//
    //******获取读到的数据*******//
    wx.onBLECharacteristicValueChange(function(res) {
      //******读取透传数值，并上传*******//
     //************************************ */
      console.log('/*****************/');
      //const arrayBufferTest = new Uint8Array([2,0,1,1,1,2,2,2,0])
      //if (testab2hex(arrayBufferTest) == testab2hex(res.value) )
      //{
      //  console.log('/*****************/');
      //  console.log('OK');
      //}
      //var b = testab2hex(res.value);
      //console.log(b.length);
      //console.log(b[0]+b[1])
      //console.log(typeof b)
      //console.log('/*****************/');

      //*************************************/
      //console.log(testab2hex(res.value))
      if (res.characteristicId == that.data.connectedDeviceReadChar) {
        clearTimeout(receivedataTimer);//数据进来之后先清除超时计数器
        receivedataTimer = setTimeout(function () {
          console.log("receiveTimeout_Function_callback")
          cmdLineProcess(app.globalData.receivepack);
          that.setData({
              receive_data: app.globalData.receivepack,
            });
          //如果其他地方不在调用，数据包清除
          app.globalData.receivepack = '';//数据包清零
          //app.globalData.receivepack.length = 0;//删除20200209 不能直接给Length赋值
        },300);//设置超时计数器
        console.log(testab2hex(res.value))
        app.globalData.receivepack = app.globalData.receivepack.concat(testab2hex(res.value))
        console.log(app.globalData.receivepack)
   
        //that.setData({
        //  receive_data: app.globalData.receivepack ,
        //});     

        if (app.globalData.receivepack.length >128)//如果数据超过最大128字节，数据清空
        {
          app.globalData.receivepack = '';
          //app.globalData.receivepack.length = 0;//删除20200209 不能直接给Length赋值
        }
      }
      //*********************//
    })
  },


  changeColorHEX: function() {
    var bgColor = '#f2f9ff'; //'#dff0ff';ecf6ff
    // 设置背景颜色数据
    this.setData({
      pageBackgroundColor: bgColor,
      inputBackgroundColor: bgColor
    });
  },

  //*********************//
  //******写入数据*******//
  //******获取写入的数据*******//
  bindKeyInput: function(e) {
    this.setData({
      send_data: e.detail.value
    })
  },
  //*********************//


  //******发送需要的数据*******//
  chatinput: function(e) {
    let temp_data = this.data.send_data;
    let countTx = this.data.countTx;
    let countTxFrame = this.data.countTxFrame;
    var send_data_temp;
    var that = this;

    //如果数据不为空
    if (temp_data != '') {
      console.log('temp_data.length', temp_data.length);
      countTx += temp_data.length;
      countTxFrame += 1;

      send_data_temp = temp_data.split(" ");
      send_data_temp = send_data_temp.join("")
      if (send_data_temp.length % 2) {
        var arr = send_data_temp.split('');
        arr.splice(-1, 1)
        send_data_temp = arr.join('')

        var arr = temp_data.split('');
        arr.splice(-1, 1)
        temp_data = arr.join('')
      }
      app.globalData.timesPack = parseInt(temp_data.length / 20);
      if (temp_data.length % 20)
        app.globalData.timesPack += 1;
      app.globalData.timesPackNow = 0;
      sendataTimer = setInterval(function() {
        that.writeHEXDatatoBLE(send_data_temp)
      }, 30); //包间隔3000ms
    }
  },
  //*********************//


  /****写HEX数据到蓝牙*******/
  writeHEXDatatoBLE: function(e) {
    var that = this;
    app.globalData.timesPack--;
    if (app.globalData.timesPack <= 0) {
      clearInterval(sendataTimer);
    }
    console.log(' wx.writeBLECharacteristicValue success', that.data.connectedDeviceWriteChar)
    wx.writeBLECharacteristicValue({
      deviceId: that.data.connectedDeviceId,
      serviceId: that.data.connectedDeviceserviceId,
      characteristicId: that.data.connectedDeviceWriteChar,
      value: stringtoHex(e.substr(app.globalData.timesPackNow * 20, 20)),
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
    app.globalData.timesPackNow += 1;
  },


  //*********************//

  //*********************//
  //******关闭蓝牙*******//
  CloseBlefun: function(e) {
    var that = this;
    console.log('CloseBlefun')
    wx.closeBLEConnection({
      deviceId: that.data.connectedDeviceId,
      success(res) {
        console.log(res)
        that.setData({
          ConnectStats: "未连接"
        })
      }
    })
  },



  //*********键盘设置************//
  /**
   * @brief  hexTap：Hex键盘单击
   * @retval 
   */
  hexTap(e) {
    let asciiMinArr = e.currentTarget.dataset.str;
    let lengthInput = this.data.lengthInput;
    let send_data = this.data.send_data;
    var temp;
    wx.vibrateShort(); // 使手机振动15ms
    temp = send_data;
    //倒数第1，2都不为空格，后面自动加入一个空格
    if (asciiMinArr != 'space') {
      if ((temp.substr((temp.length - 1)) != ' ') && (temp.substr((temp.length - 2), 1) != ' ')) {
        if (temp.length > 1) {
          send_data += ' ';
        }
        send_data += asciiMinArr;
        temp = send_data;
      } else {
        send_data += asciiMinArr;
        temp = send_data;
      }
    }
    console.log('temp.length', temp.length);
    console.log('temp.substr((temp.length - 1))', temp.substr((temp.length - 1), 1));
    console.log('temp.substr((temp.length - 2))', temp.substr((temp.length - 2), 1));
    if (temp.length > 1)
      if ((temp.substr((temp.length - 1), 1) != ' ') && (temp.substr((temp.length - 2), 1) != ' '))
        send_data += ' ';

    lengthInput = send_data.length;
    this.setData({
      send_data: send_data,
      lengthInput: lengthInput
    })
  },

  /**
   * @brief  backSpace：删除一个字节
   * @retval 
   */
  backSpace() {
    var that = this
    let send_data = this.data.send_data;
    let lengthInput = this.data.lengthInput;

    var arr = send_data.split('');
    arr.splice(-1, 1)
    var str = arr.join('')

    lengthInput = send_data.length;
    wx.vibrateShort(); // 使手机振动15ms

    this.setData({
      send_data: str,
      lengthInput: lengthInput
    })
  },

  /**
   * @brief  ClearReceiveTitle：清除接收窗口
   * @retval 
   */
  ClearReceiveTitle: function(e) {
    var that = this;
    console.log('ClearReceiveTitle')
    this.setData({
      'receive_data': ''
    })
  },

  /**
   * @brief  funcDelInput：清除发送窗口
   * @retval 
   */
  funcDelInput() {
    let send_data = this.data.send_data;
    let lengthInput = this.data.lengthInput;
    wx.vibrateShort(); // 使手机振动15ms
    lengthInput = send_data.length;
    this.setData({
      send_data: '',
      lengthInput: 0,
      countTx: 0,
      countTxFrame: 0,
    })
    console.log(send_data)
  }
})