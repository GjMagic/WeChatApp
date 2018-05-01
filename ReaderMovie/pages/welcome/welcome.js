Page({
  handleTap () {
    /* // navigateTo是隐藏上一页跳转下一页
    wx.navigateTo({
      url: '../post/post'
    }) */

    // redirectTo是关闭(卸载)上一页跳转下一页
    wx.redirectTo({
      url: '../post/post'
    })
  },
  onUnload () {
    // 卸载页面对应redirectTo
  },
  onHide () {
    // 隐藏页面对应navigateTo
  }
})