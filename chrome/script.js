$(document).ready(function() {   // Load the function after DOM ready.

$("body").append("<h1>hello</h1>");
var grade=[];
		grade['O']=10;
		grade['A+']=9;
		grade['A']=8;
		grade['B+']=7;
		grade['B']=6;
		grade['C']=5;
		grade['F']=0;
		grade['AB']=0;
var aa=[];
var bb=[];

aa[0]=document.getElementsByTagName("td")['17'].innerHTML;
bb[0]=document.getElementsByTagName("td")['18'].innerHTML;
aa[1]=document.getElementsByTagName("td")['21'].innerHTML;
bb[1]=document.getElementsByTagName("td")['22'].innerHTML;
aa[2]=document.getElementsByTagName("td")['25'].innerHTML;
bb[2]=document.getElementsByTagName("td")['26'].innerHTML;
aa[3]=document.getElementsByTagName("td")['29'].innerHTML;
bb[3]=document.getElementsByTagName("td")['30'].innerHTML;
aa[4]=document.getElementsByTagName("td")['33'].innerHTML;
bb[4]=document.getElementsByTagName("td")['34'].innerHTML;
aa[5]=document.getElementsByTagName("td")['37'].innerHTML;
bb[5]=document.getElementsByTagName("td")['38'].innerHTML;
aa[6]=document.getElementsByTagName("td")['41'].innerHTML;
bb[6]=document.getElementsByTagName("td")['42'].innerHTML;
aa[7]=document.getElementsByTagName("td")['45'].innerHTML;
bb[7]=document.getElementsByTagName("td")['46'].innerHTML;



	var total=0;
		for (var i = 0; i < bb.length; i++) {
			total = total + grade[aa[i]]*parseInt(bb[i]);
		}
		total = total/24;
var name=document.getElementsByName('HALLTICKET')['0'].value;
window.localStorage.setItem(name,total);

});