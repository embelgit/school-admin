function demoJsonToDb123()
{
	var x, y,z;
	
/*	fetch('http://dummy.restapiexample.com/api/v1/employees').
	then(response => response.json()).
	then(json => console.log(json));*/
	
		
		var data = 
		[{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image":""},
		{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""},
		{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66","profile_image":""},
		{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22","profile_image":""},
		{"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33","profile_image":""},
		{"id":"6","employee_name":"Brielle Williamson","employee_salary":"372000","employee_age":"61","profile_image":""},
		];
	
	alert(data.length);
	
	var convertedToJson = JSON.stringify(data); 
	
	for(var i = 0; i<data.length; i++)
	{
		alert(data[i].id+" "+data[i].employee_name);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*fetch('http://dummy.restapiexample.com/api/v1/employees').
	then(response => console.log(response));*/
	
	/*fetch('http://dummy.restapiexample.com/api/v1/employees').then(function(resp)
	{
		return resp.json();
	}).then(function(data)
	{
		var dataLength = data.length;
		alert(dataLength);
	});*/



	
	
/*
var jsonStr = {"data": [
        {
            "id": 1,
            "Name": "Choc Cake",
            "Image": "1.jpg",
            "Category": "Meal",
            "Method": "",
            "Ingredients": [
                {
                    "name": "1 Cup Ice"
                },
                {
                    "name": "1 Bag Beans"
                }
            ]
        },
        {
            "id": 2,
            "Name": "Ice Cake",
            "Image": "dfdsfdsfsdfdfdsf.jpg",
            "Category": "Meal",
            "Method": "",
            "Ingredients": [
                {
                    "name": "1 Cup Ice"
                }
            ]
        }
    ]
}


JSONObject jsonObj = new JSONObject(jsonStr);

JSONArray ja_data = jsonObj.getJSONArray("data");
int length = jsonObj .length(); 

//loop to get all json objects from data json array
for(int i=0; i<length; i++) 
{
	alert("abc");
}
*/
}