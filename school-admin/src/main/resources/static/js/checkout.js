function validateUserDetails()
{
	document.getElementById("placeOrder").disabled = true;
	
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var adharNo = $('#adharNo').val();
	var saatBara = $('#saatBara').val();
	var address = $('#address').val();
	var country = $('#selectCountry').val();
	var villageCityTown = $('#villageCityTown').val();
	var contactNo = $('#contactNo').val();
	var zipCode = $('#zipCode').val();
	
	var checkNames = /^[a-zA-Z]*$/;
	var checkNumber = /^[0-9]+$/;
	
	if(firstName.length > 0)
	{
		if(firstName.match(checkNames))
		{}
		else
		{
			alert("Please Enter valid First Name");
			document.getElementById("placeOrder").disabled = false;
			return false;
		}
	}
	else
	{
		firstName = "N/A"
	}
	
	if(lastName.length > 0)
	{
		if(lastName.match(checkNames))
		{}
		else
		{
			alert("Please Enter valid Last Name");
			document.getElementById("placeOrder").disabled = false;
			return false;
		}
	}
	else
	{
		lastName = "N/A"
	}
	
	if(adharNo.length > 0 && adharNo.length == 12)
	{
		if(adharNo.match(checkNumber))
		{}
		else
		{
			alert("Please Enter valid Adhar Number");
			document.getElementById("placeOrder").disabled = false;
			return false;
		}
	}
	else
	{
		adharNo = "0"
	}
	
	if(saatBara.length > 0)
	{}
	else
	{
		saatBara = "N/A"
	}
	
	if(address.length > 0)
	{}
	else
	{
		address = "N/A"
	}
	
	if(villageCityTown.length > 0)
	{}
	else
	{
		villageCityTown = "N/A"
	}
	
	if(country.length > 0)
	{}
	else
	{
		country = "N/A"
	}
	
	if(contactNo.length > 0 && contactNo.length == 10)
	{
		if(contactNo.match(checkNumber))
		{}
		else
		{
			alert("Please Enter valid 10 Digit Contact Number");
			document.getElementById("placeOrder").disabled = false;
			return false;
		}
	}
	else
	{
		alert("Please Enter valid 10 Digit Contact Number");
		document.getElementById("placeOrder").disabled = false;
		return false;
	}
	
	if(zipCode.length > 0 && zipCode.length == 6)
	{
		if(zipCode.match(checkNumber))
		{}
		else
		{
			alert("Please Enter valid 6 Digit Pin Code");
			document.getElementById("placeOrder").disabled = false;
			return false;
		}
	}
	else
	{
		zipCode = "0"
	}

	registerOrder(firstName, lastName, adharNo, saatBara, address, country, villageCityTown, contactNo, zipCode);
}

function registerOrder(firstName, lastName, adharNo, saatBara, address, country, villageCityTown, contactNo, zipCode)
{
	document.getElementById("placeOrder").disabled = true;
	
	var grossTotal = "";
	var shipping = "0";
	var discription = "N/A"
	
		var cartobj = JSON.parse($.cookie("product-cookie"));
		
		var orderData = [];
		
		$.each(cartobj,function(key, value)
		{
			grossTotal = +grossTotal + +(value.total);
		});
		
		$.each(cartobj,function(key, value)
		{	
			//product Details
			value["grossTotal"] = grossTotal;
			value["shipping"] = shipping;
			value["discription"] = discription;
			
			//user details
			value["firstName"] = firstName;
			value["lastName"] = lastName;
			value["adharNo"] = adharNo;
			value["saatBara"] = saatBara;
			value["address"] = address;
			value["country"] = country;
			value["villageCityTown"] = villageCityTown;
			value["contactNo"] = contactNo;
			value["zipCode"] = zipCode;
			
			orderData.push(value);
		});
	
		$.ajax({
            url : "/regProductDetails",
            contentType: "application/json",
            type: 'POST',
            //async: false,
            data: JSON.stringify(orderData),
            success: function (data)
            {
            	alert("Order Placed");
				$.removeCookie('product-cookie');
            	location.replace("/userOrders");            	
            },
            error: function()
            {
            	alert("failed");
            }
        });
		
		document.getElementById("placeOrder").disabled = false;
}

// this function to load cart quantity 
$(function()
{		
	//show cart bag 1	
	var cartobj =  JSON.parse($.cookie("product-cookie"));
	var element = $('<span>'+cartobj.length+'</span>');
	$("#showCartItemCount").append(element);
	
	//show cart bag 2
	var element1 = $('<span>'+cartobj.length+'</span>');
	$("#showCartItemCount2").append(element1);
	
});
