var countText=document.getElementById('count-text');

setInterval(function () {
	var date=new Date();
	var proconDate=new Date(2017,9,7,0,0,0);
	var day,hour,min,sec;

	var milliSec=proconDate.getTime()-date.getTime();

	day=~~(milliSec/(1000*60*60*24));
	milliSec-=day*1000*60*60*24;

	hour=~~(milliSec/(1000*60*60));
	milliSec-=hour*1000*60*60;

	min=~~(milliSec/(1000*60));
	milliSec-=min*1000*60;

	sec=~~(milliSec/1000);

	countText.innerHTML=day+'日'+hour+'時間'+min+'分'+sec+'秒';
},1000)