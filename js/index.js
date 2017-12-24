/********************************************************广告图片数组*************************************************/
var imgs=[
	"beyond/1.png",
	"beyond/2.jpg",
	"beyond/2.png",
	"beyond/3.jpg",
	"beyond/6.jpg",
];
+function(){
	//获得id为slider的容器的宽作为每个LI的宽
	var LIWIDTH=parseFloat($("#slider").css("width"));
	//保存id为imgs和id为indexs的ul
	var $ulImgs=$("#imgs"),$ulIdxs=$("#indexs");
	var n=0;//定义n保存当前正在显示的图片下标
	var SPEED=500;//定义speed保存自动轮播的速度
	var WAIT=2000;//定义WAIT保存自动轮播间的等待时间
	var canAuto=true;//定义标记变量标记能否自动轮播
	var timer=null;//定义一次性定时器的序号
	+function(){//初始化$ulImgs和$ulIdxs的内容
		//遍历imgs数组,生成html代码片段
		for(var i=0,htmlImgs="",htmlIdxs="";
				i<imgs.length;
				i++){
			htmlImgs+="<li><img src='"+imgs[i]+"'></li>";
			htmlIdxs+="<li>"+(i+1)+"</li>";
		}
		//将代码片段填充到ul中
		$ulImgs.html(htmlImgs);
		$ulIdxs.html(htmlIdxs);
		//修改$ulImgs的宽
		$ulImgs.css("width",LIWIDTH*(imgs.length+1));
		//复制$ulImgs的第一个元素，再追加到结尾
		$ulImgs.append(
			$ulImgs.children(":first").clone()
		);
		//设置$ulIdxs中第一个li默认为hover
		$ulIdxs.children(":first").addClass("hover");
	}();
	function autoMove(){//启动自动轮播 
		timer=setTimeout(function(){
			n++;//将当前图片的下标+1
			//延迟WAIT毫秒,再启动动画,将$ulImgs的left移动到-n*LIWIDTH的位置
			$ulImgs.animate({
				left:-n*LIWIDTH
			},SPEED,function(){//动画结束后
				//如果是最后一张(n等于imgs的length)
				if(n==imgs.length){
					n=0;//将n改回0
					$ulImgs.css("left",0);//将$ulImgs的left归0
				}
				//设置$ulIdxs中n位置的li为hover，清除其它hover
				$ulIdxs
					.children(":eq("+n+")").addClass("hover")
					.siblings().removeClass("hover");	
				//如果可以自动轮播时,才启动
				if(canAuto) autoMove();//再次启动自动轮播
			});
		},WAIT);
	};
	autoMove();
	//实现手动轮播
	//为$ulIdxs添加鼠标进入事件委托,只允许li响应
  $ulIdxs.on("mouseover","li",function(){
		//停止&ulImgs上的一切动画
		$ulImgs.stop(true);
		//修改n为当前li的下标: 
		n=$("#indexs>li").index(this);
		//让$ulImgs移动到-n*LIWIDTH的位置
		$ulImgs.animate({
			left:-n*LIWIDTH
		},SPEED,function(){
			//设置$ulIdxs中n位置的li为hover，清除其它hover
			$ulIdxs
				.children(":eq("+n+")").addClass("hover")
				.siblings().removeClass("hover");	
		});
	});
	//鼠标进入slider区域，修改标记禁止继续自动轮播
	$("#slider").mouseenter(function(){
		canAuto=false;
		clearTimeout(timer);
	}).mouseleave(function(){//鼠标离开,重启自动轮播
		canAuto=true;//修改标记允许继续自动轮播
		autoMove();
	});
}();
/****************************************************************广告轮播结束******************************************************/

/*****************************************Story of beyond 开始*****************************************************************/
var width=100;
var r=parseInt(Math.random()*16);
var g=parseInt(Math.random()*20);
var b=parseInt(Math.random()*13);
var a=parseInt(Math.random()*10);
//为每个圆按其下标有规律的指定left
$(".circle").css("left",function(i){
	return i*width;
})
//为每个圆指定背景图片
.click(function(){
	var left=parseFloat($(this).css("left"));
	$(this)
		.css("zIndex",10)
		.css("background-repeat","no-repeat")//放大时不被其他元素遮挡
		.animate({
			width:300, height:300, opacity:0.3,
			borderRadius:150,//保证始终以原型扩散
			//保证扩散时，圆心始终不变
			top:-50, left:left-50,
		},3000)
		.animate({
			width:200, height:200, opacity:1,
			borderRadius:100,//保证始终以原型扩散
			//保证扩散时，圆心始终不变
			top:0, left:left,
		},3000);
		     //动画接收后自动执行: 隐藏当前元素
});
$(".circle1").css(
		"backgroundImage","url(黄家驹/"+(r+1)+".jpg)");
$(".circle2").css(
		"backgroundImage","url(黄家强/"+(g+1)+".jpg)");
$(".circle3").css(
		"backgroundImage","url(黄贯中/"+(b+1)+".jpg)");
$(".circle4").css(
		"backgroundImage","url(叶世荣/"+(a+1)+".jpg)");

/*****************************************Story of beyond 结束*****************************************************************/

/*****************************************返回顶部开始*****************************************************************/
function pageScroll(){
			//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数） 
			window.scrollBy(0,-20); 
			//延时递归调用，模拟滚动向上效果 
			scrolldelay = setTimeout('pageScroll()',0); 
			//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值 
			var sTop=document.documentElement.scrollTop+document.body.scrollTop; 
			//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面） 
			if(sTop==0) clearTimeout(scrolldelay); 
			}
/*****************************************返回顶部结束*****************************************************************/