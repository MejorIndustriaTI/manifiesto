$(document).ready(function(){var e=new hashgrid({numberOfGrids:1});$("#open_nav").click(function(){$("body").toggleClass("open")}),$("#share").attr("href","https://twitter.com/share?url="+encodeURIComponent(location.href)+"&text=Únete al "+encodeURIComponent(document.title)+" en: ").attr("target","_blank").click(function(){ga("send","event","share","button","click","twitter",1)}),$("#gridview a").click(function(){var e=$(this).find("span").text(),t=e!="Únete"?"company":"join";ga("send","event",t,"click",e,1)})});