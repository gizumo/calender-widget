<article id="calender">
<body>
<script language="JavaScript">
ar1=new Array("日","月","火","水","木","金","土");	
kyou = new Date();	
yy = kyou.getFullYear();
mm = kyou.getMonth() + 1;
dd = kyou.getDate();
dan = kyou.getDay();	
da = ar1[dan];
ym = yy + "年" + mm + "月"dd1 = dd + "日"da1 = "(" + da + "曜日)"document.write("<table border=0  WIDTH=158 HEIGHT=178><tr>");
document.write("<td background='koyomi1.gif' WIDTH=160 HEIGHT=180>");
document.write("<table border=0 WIDTH=158 HEIGHT=178><tr>");
document.write("<td ALIGN='center'>");
document.write(ym);
if (dan == 0 ){document.write("<font color=#ff0000>")};
if (dan == 6 ){document.write("<font color=#0000ff>")};
document.write("<br><br><font size=7>") document.write(dd1);
document.write("</font><br>") document.write(da1);
if (dan == 0 || dan == 6){document.write("</font>")};
document.write("</td></tr></table>");
document.write("</td></tr></table>");
</script>
</body>
</article>