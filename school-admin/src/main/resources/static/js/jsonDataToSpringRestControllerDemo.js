function registerOrder()
{
	document.getElementById("placeOrder").disabled = true;
	
		var count = 0;
	
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var adharNo = $('#adharNo').val();
		var saatBara = $('#saatBara').val();
		var address = $('#address').val();
		var country = $('#selectCountry').val();
		var villageCityTown = $('#villageCityTown').val();
		var contactNo = $('#contactNo').val();
		var zipCode = $('#zipCode').val();
		
		var dataToAppend = new FormData();
	    var xhr = new XMLHttpRequest();	    
	    
/*		var orderData = [{fkProductId:"7", productName:"product 7", price:"500", quantity:"2", totalAmount:"2000", fkCatId:"2", 
			category:"fertilizer", discription:"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", shipping:"60", 
			firstName:firstName, lastName:lastName, adharNo:adharNo, saatBara:saatBara, address:address, country:country, 
			villageCityTown:villageCityTown, contactNo:contactNo, zipCode:zipCode},
			
 		    {fkProductId:"5", productName:"product 5", price:"200", quantity:"1", totalAmount:"2000", fkCatId:"3", category:"pesticide", 
			discription:"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", shipping:"60", firstName:firstName, lastName:lastName, 
			adharNo:adharNo, saatBara:saatBara, address:address, country:country, villageCityTown:villageCityTown, contactNo:contactNo,
			zipCode:zipCode},

			{fkProductId:"12", productName:"product 12", price:"900", quantity:"3", totalAmount:"2000", fkCatId:"4", category:"seed", 
			discription:"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", shipping:"60", firstName:firstName, lastName:lastName, 
			adharNo:adharNo, saatBara:saatBara, address:address, country:country, villageCityTown:villageCityTown, contactNo:contactNo, 
			zipCode:zipCode},

			{fkProductId:"14", productName:"product 4", price:"400", quantity:"5", totalAmount:"2000", fkCatId:"1", category:"equipment", 
			discription:"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", shipping:"60", firstName:firstName, lastName:lastName, 
			adharNo:adharNo, saatBara:saatBara, address:address, country:country, villageCityTown:villageCityTown, contactNo:contactNo, 
			zipCode:zipCode}]
*/		
	    
	    
		var orderData = [{"fkProductId":7, "productName":"product 7", "price":500, "quantity":2, "totalAmount":2000, "fkCatId":2, 
			"category":"fertilizer", "discription":"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", "shipping":60, 
			"firstName":firstName, "lastName":lastName, "adharNo":adharNo, "saatBara":saatBara, "address":address, "country":country, 
			"villageCityTown":villageCityTown, "contactNo":contactNo, "zipCode":zipCode},
			
 		    {"fkProductId":5, "productName":"product 5", "price":200, "quantity":1, "totalAmount":2000, "fkCatId":3, 
			 "category":"pesticide", "discription":"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", "shipping":60, 
			 "firstName":firstName, "lastName":lastName, "adharNo":adharNo, "saatBara":saatBara, "address":address, "country":country, 
			 "villageCityTown":villageCityTown, "contactNo":contactNo, "zipCode":zipCode},

			{"fkProductId":12, "productName":"product 12", "price":900, "quantity":3, "totalAmount":2000, "fkCatId":4, 
			 "category":"seed", "discription":"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", "shipping":60, 
			 "firstName":firstName, "lastName":lastName, "adharNo":adharNo, "saatBara":saatBara, "address":address, "country":country, 
			 "villageCityTown":villageCityTown, "contactNo":contactNo, "zipCode":zipCode},

			{"fkProductId":14, "productName":"product 14", "price":400, "quantity":5, "totalAmount":2000, "fkCatId":1, 
			 "category":"equipment", "discription":"wryieyroieytopteyoteteut dhgfdskgljgfdshfgs bvvvvvczbxncvbnvn", "shipping":60, 
			 "firstName":firstName, "lastName":lastName, "adharNo":adharNo, "saatBara":saatBara, "address":address, "country":country, 
			 "villageCityTown":villageCityTown, "contactNo":contactNo, "zipCode":zipCode}]
		
		$.ajax({
            url : "/regProductDetails",
            contentType: "application/json",
            type: 'POST',
            //async: false,
            data: JSON.stringify(orderData),
            success: function (data)
            {
            	alert("Your Order Placed");
            	location.replace("/userOrders");            	
            },
            error: function()
            {
            	alert("failed");
            }
        });
		
		document.getElementById("placeOrder").disabled = false;
}
