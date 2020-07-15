function saveStudentAdminVal()
{
	document.getElementById("saveadmin").disabled = true;
	
	var studClass = $('#studClass').val();
	var chapterName = $('#chapterName').val();
	var lesson = $('#lesson').val();
	var topic = $('#topic').val();
    //alert("ok");
	
	/*if(studClass.length > 0)
	{
		alert("Please Enter Student Class");
		document.getElementById("saveadmin").disabled = false;
		return false;
	}
	if(chapterName.length > 0)
	{
		alert("Please Enter Chapter Name");
		document.getElementById("saveadmin").disabled = false;
		return false;
	}
	if(lesson.length > 0)
	{
		alert("Please Enter Lesson Name");
		document.getElementById("saveadmin").disabled = false;
		return false;
	}
	if(topic.length > 0)
	{
		alert("Please Enter Topic Name");
		document.getElementById("saveadmin").disabled = false;
		return false;
	}*/
	saveStudentAdmin(studClass,chapterName,lesson,topic);
}

function saveStudentAdmin(studClass,chapterName,lesson,topic)
{	
	document.getElementById("saveadmin").disabled = true;
			
		var adminData;
		var value = {};
				
		value["studClass"] = studClass;
		value["chapterName"] = chapterName;
		value["lessionName"] = lesson;
		value["topicName"] = topic;		 
						
		//adminData.push(value);
		//alert(adminData);
		var jsondata ={
				"studClass":studClass,
				"chapterName":chapterName,
				"lessionName":lesson,
				"topicName":topic
				};
	
		$.ajax({
            url : "/addstudadmin",
            method: "POST",
            data: JSON.stringify(jsondata),
            dataType: 'json',
            contentType: "application/json",
                       
            success: function (data)
            {
            	alert("Save Data Successfully");
				//$.removeCookie('product-cookie');
            	location.replace("/");            	
            },
            error: function()
            {
            	alert("failed");
            }
        });
		
		document.getElementById("saveadmin").disabled = false;
}