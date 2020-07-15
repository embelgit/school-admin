function saveStudentUserVal()
{
	document.getElementById("saveuser").disabled = true;
	
	var userStudClass = $('#userstudClass').val();
	var userChapterName = $('#userchapterName').val();
	var userLessonName = $('#userlesson').val();
	var userTopicName = $('#usertopic').val();
	//alert("ok");
	
	saveStudentUser(userStudClass,userChapterName,userLessonName,userTopicName);
}

function saveStudentUser(userStudClass,userChapterName,userLessonName,userTopicName)
{	
	document.getElementById("saveuser").disabled = true;
			
		var userData;
		var value = {};
				
		value["userStudClass"] = userStudClass;
		value["userChapterName"] = userChapterName;
		value["userLessonName"] = userLessonName;
		value["userTopicName"] = userTopicName;
						
		//userData.push(value);
		var jsondataU ={
				"userStudClass":userStudClass,
				"userChapterName":userChapterName,
				"userLessonName":userLessonName,
				"userTopicName":userTopicName
				};
	
		$.ajax({
            url : "/addstuduser",
            method: 'POST',
            data: JSON.stringify(jsondataU),
            dataType: 'json',
            contentType: "application/json",
                      
            success: function (data)
            {
            	alert("Save Data Successfully");
				//$.removeCookie('product-cookie');
            	location.replace("/userpage");            	
            },
            error: function()
            {
            	alert("failed");
            }
        });
		
		document.getElementById("saveuser").disabled = false;
}