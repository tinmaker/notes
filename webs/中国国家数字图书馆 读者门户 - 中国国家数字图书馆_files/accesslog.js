jQuery.post("/system/log/AccesslogServlet?rand="+Math.random(),{'uri':currentURL,'userid':user_id,'ip':ip},
function(data){	}
);