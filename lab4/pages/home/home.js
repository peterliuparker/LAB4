Page({
    data: {
    },
    tp_his:function(){
        wx.navigateTo({
          url: '../home/bb_history/bb_history',
        })
      },
    tp_single:function(){
        wx.navigateTo({
          url: '../single/single',
        })
      },
    tp_multi:function(){
        wx.navigateTo({
          url: '../home/multi/multi',
        })
      }
})