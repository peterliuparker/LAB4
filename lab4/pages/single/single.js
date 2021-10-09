const app = getApp()
Page({
  data: {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    one_img:'image/6-point.png',
    two_img:'image/6-point.png',
    three_img:'image/6-point.png',
    four_img:'image/6-point.png',
    five_img:'image/6-point.png',
    six_img:'image/6-point.png',
    count1:0,
    count2:0,
    count3:0,
    count4:0,
    count5:0,
    count6:0,
    flag:true,
    ans:'',
    timer:null,
    msg:'开始博饼',
    total:0,
    txt:'中秋博饼',
    //图片的素材和效果图会发在最下面
    arr:[
      'image/1-point.png',
      'image/2-point.png',
      'image/3-point.png',
      'image/4-point.png',
      'image/5-point.png',
      'image/6-point.png',
    ]
  },
  
  enter:function(_event){
    var obj = this;
    
    if(obj.data.flag==true){
        obj.data.timer = setInterval(function () {
        obj.data.one = Math.floor(Math.random() * 5)+1;
        obj.data.two = Math.floor(Math.random() * 5)+1;
        obj.data.three = Math.floor(Math.random() * 5)+1;
        obj.data.four = Math.floor(Math.random() * 5)+1;
        obj.data.five = Math.floor(Math.random() * 5)+1;
        obj.data.six = Math.floor(Math.random() * 5)+1;
        obj.setData({
          one_img: obj.data.arr[obj.data.one-1],
          two_img: obj.data.arr[obj.data.two-1],
          three_img: obj.data.arr[obj.data.three-1],
          four_img: obj.data.arr[obj.data.four-1],
          five_img: obj.data.arr[obj.data.five-1],
          six_img: obj.data.arr[obj.data.six-1],
          flag:false,
          msg:'停止', 
        })
      },70)
    }
    
    else{
      clearInterval(obj.data.timer);
      obj.setData({
          msg:'开始博饼',
          flag:true,
          txt:'恭喜你摇到：',   
      }
      )
      //one
      if(obj.data.one==1)obj.data.count1++;
      if(obj.data.one==2)obj.data.count2++;
      if(obj.data.one==3)obj.data.count3++;
      if(obj.data.one==4)obj.data.count4++;
      if(obj.data.one==5)obj.data.count5++;
      if(obj.data.one==6)obj.data.count6++;
      //two
      if(obj.data.two==1)obj.data.count1++;
      if(obj.data.two==2)obj.data.count2++;
      if(obj.data.two==3)obj.data.count3++;
      if(obj.data.two==4)obj.data.count4++;
      if(obj.data.two==5)obj.data.count5++;
      if(obj.data.two==6)obj.data.count6++;
      //three
      if(obj.data.three==1)obj.data.count1++;
      if(obj.data.three==2)obj.data.count2++;
      if(obj.data.three==3)obj.data.count3++;
      if(obj.data.three==4)obj.data.count4++;
      if(obj.data.three==5)obj.data.count5++;
      if(obj.data.three==6)obj.data.count6++;
      //four
      if(obj.data.four==1)obj.data.count1++;
      if(obj.data.four==2)obj.data.count2++;
      if(obj.data.four==3)obj.data.count3++;
      if(obj.data.four==4)obj.data.count4++;
      if(obj.data.four==5)obj.data.count5++;
      if(obj.data.four==6)obj.data.count6++;
      //five
      if(obj.data.five==1)obj.data.count1++;
      if(obj.data.five==2)obj.data.count2++;
      if(obj.data.five==3)obj.data.count3++;
      if(obj.data.five==4)obj.data.count4++;
      if(obj.data.five==5)obj.data.count5++;
      if(obj.data.five==6)obj.data.count6++;
      //six
      if(obj.data.six==1)obj.data.count1++;
      if(obj.data.six==2)obj.data.count2++;
      if(obj.data.six==3)obj.data.count3++;
      if(obj.data.six==4)obj.data.count4++;
      if(obj.data.six==5)obj.data.count5++;
      if(obj.data.six==6)obj.data.count6++;
      //判断博饼结果
      if(obj.data.count4==1)obj.setData({ans:'一秀',})
        else if (obj.data.count4==2)obj.setData({ans:'二秀',})
        else if(obj.data.count4==3)obj.setData({ans:'三红',})
        else if(obj.data.count1==1&&obj.data.count2==1&&obj.data.count3==1&&obj.data.count4==1&&obj.data.count5==1&&obj.data.count6==1)obj.setData({ans:'对堂',})
        else if(obj.data.count4==4&&obj.data.count1!=2)obj.setData({ans:'状元',})
        else if(obj.data.count4==4&&obj.data.count1==2)obj.setData({ans:'状元插金花',})
        else  if(obj.data.count2==4)obj.setData({ans:'四进',})
        else if(obj.data.count2==5)obj.setData({ans:'五子登科',})
        else  if(obj.data.count4==1&&obj.data.count2==5)obj.setData({ans:'五子带一秀',})
        else if(obj.data.count4==5)obj.setData({ans:'五王',})
        else if(obj.data.count2==6)obj.setData({ans:'六杯黑',})
        else if(obj.data.count1==6)obj.setData({ans:'遍地锦',})
        else if(obj.data.count4==6)obj.setData({ans:'六杯红',})
        else obj.setData({ans:'再接再厉',})
      obj.data.count4=0;
      obj.data.count2=0;
      obj.data.count1=0;
    }
  },
})