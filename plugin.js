(function($) {

    
    
    $.fn.xmlhttp = function(method,url,Content_type,X_Requested_With,data,location) {
    	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open(method,url,true);
  xmlhttp.setRequestHeader("Content-type",Content_type);
  xmlhttp.setRequestHeader("X-Requested-With",X_Requested_With);
  xmlhttp.send(data);
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    $(location).html(xmlhttp.responseText);
    }
  }
    };
    

}(jQuery));
