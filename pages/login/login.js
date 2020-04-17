/** 
 *******************************************************************************
 * @file     : login
 * @details  ：登录界面
 * @author   ：Tyler   
 ******************************************************************************
 */
Page({
  data: {
    // 账号
    key: '',
    // 密码
    password: '',
    // 密码的显示和隐藏
    isShowPassword: true

  },

  // 账号有内容显示清除按钮
  bindKeyInput: function (e) {
    console.log("bindKeyInput");
    this.setData({
      key: e.detail.value,
    })
  },
  // 密码有内容显示清除按钮
  bindPassInput: function (e) {
    console.log("bindPassInput");
    this.setData({
      password: e.detail.value,
    })
  },
  // 登陆跳转
  bindViewTap: function () {
    var that = this
    console.log(that.data.password);
    if (that.data.password == "123456")//密码正确，进入BLE界面
    {
      wx.redirectTo({
        url: '../bledata/bledata'
      })
    }else//密码错误，清除密码并振动
    {
      wx.vibrateLong({ });//长震动
    }
  },
  // 密码显示和隐藏切换
  toggleShowPassword: function (e) {
    console.log("toggleShowPassword");
    var isShowPassword = !this.data.isShowPassword;
    this.setData({
      isShowPassword: isShowPassword
    });
  },
  // 清除账号内容
  eliminate: function () {
    console.log("eliminate");
    this.setData({
      key: ""
    })
  }
})