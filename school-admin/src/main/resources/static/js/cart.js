//this function to add product in cart (cookie)
var myCookiesCart = {};
// var data={items:[]};
var data = [];

$(function() {
	$("#show").on('click', '.btn-add-cart', function() {

		var productid = $(this).data("productid");
		var category = $(this).data("cat");
		var productname = $(this).data("productname");
		var price = $(this).data("price");
		var imagepath = $(this).data("imagepath");
		var fkCatId = $(this).data("fkcategoryid");
		var packing = $(this).data("packing");
		var unit = $(this).data("unit");
		var manufacturer = $(this).data("manufacturer");
		var quantity=$('#quantityak'+productid).val();
		
		
		
		var total=price*quantity
		
		myCookiesCart["productid"] = productid;
		myCookiesCart["category"] = category;
		myCookiesCart["productname"] = productname;
		myCookiesCart["price"] = price;
		myCookiesCart["quantity"] = quantity;
		myCookiesCart["imagePath"] = imagepath;
		myCookiesCart["total"] = total;
		myCookiesCart["fkCatId"] = fkCatId;
		myCookiesCart["packing"] = packing;
		myCookiesCart["unit"] = unit;
		myCookiesCart["manufacturer"] = manufacturer;
		
		var cdata=[];
		var flag=0;
		
		if (typeof $.cookie('product-cookie') === 'undefined'){
			
			cdata.push(myCookiesCart);  //if no cookie
			
			var date = new Date();
			date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

			$.cookie("product-cookie",JSON.stringify(cdata), {
				expires : date
			});
			
			
			} else {
				
				
				var jsonObj = JSON.parse($.cookie("product-cookie"));
				for (var i = 0; i < jsonObj.length; i++) {
					
					  if (jsonObj[i].productid == productid) {  
						  flag=1;
					  }
				}
				
				if(flag==0)
				{
					//if cookie is available
					var cartobj =  JSON.parse($.cookie("product-cookie"));
					$.each(cartobj,function(key, value)
					{
						cdata.push(value)
					});
					cdata.push(myCookiesCart);
					$.removeCookie('product-cookie');
				
					var date = new Date();
					date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

					$.cookie("product-cookie",JSON.stringify(cdata), {
						expires : date
					});
				}	
				else{
					alert("you have already added product to cart check your cart")
				}
				
			
			
			}
	
		
		//show cart bag 1	
		var cartobj =  JSON.parse($.cookie("product-cookie"));
		var element = $('<span>'+cartobj.length+'</span>');
		$("#showCartItemCount").append(element);
		
		//show cart bag 2
		var element1 = $('<span>'+cartobj.length+'</span>');
		$("#showCartItemCount2").append(element1);

	});

	//this function for all product on home page 
	$("#product-list").on('click', '.btn-add-cart', function() {

			var productid = $(this).data("productid");
			var category = $(this).data("cat");
			var productname = $(this).data("productname");
			var price = $(this).data("price");
			var imagepath = $(this).data("imagepath");
			var fkCatId = $(this).data("fkcategoryid");
			var packing = $(this).data("packing");
			var unit = $(this).data("unit");
			var manufacturer = $(this).data("manufacturer");
			var quantity=$('#quantity'+productid).val();
			
			
			
			var total=price*quantity
			
			myCookiesCart["productid"] = productid;
			myCookiesCart["category"] = category;
			myCookiesCart["productname"] = productname;
			myCookiesCart["price"] = price;
			myCookiesCart["quantity"] = quantity;
			myCookiesCart["imagePath"] = imagepath;
			myCookiesCart["total"] = total;
			myCookiesCart["fkCatId"] = fkCatId;
			
			myCookiesCart["packing"] = packing;
			myCookiesCart["unit"] = unit;
			myCookiesCart["manufacturer"] = manufacturer;
			var cdata=[];
			var flag=0;
			
			if (typeof $.cookie('product-cookie') === 'undefined'){
				
				cdata.push(myCookiesCart);  //if no cookie
				
				var date = new Date();
				date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

				$.cookie("product-cookie",JSON.stringify(cdata), {
					expires : date
				});
				
				
				} else {
					
					
					var jsonObj = JSON.parse($.cookie("product-cookie"));
					
					for (var i = 0; i < jsonObj.length; i++) {
						
						  if (jsonObj[i].productid == productid) {  
						   // jsonObj[i].quantity = quantity;		
							  flag=1;
						  }
					}
					
					if(flag==0)
					{
						//if cookie is available
						var cartobj =  JSON.parse($.cookie("product-cookie"));
						$.each(cartobj,function(key, value)
						{
							cdata.push(value)
						});
						cdata.push(myCookiesCart);
						$.removeCookie('product-cookie');
					
						var date = new Date();
						date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

						$.cookie("product-cookie",JSON.stringify(cdata), {
							expires : date
						});
					}	
					else{
						alert("you have already added product to cart check your cart")
					}
					
				
				
				}
		
			
			//show cart bag 1	
			var cartobj =  JSON.parse($.cookie("product-cookie"));
			var element = $('<span>'+cartobj.length+'</span>');
			$("#showCartItemCount").append(element);
			
			//show cart bag 2
			var element1 = $('<span>'+cartobj.length+'</span>');
			$("#showCartItemCount2").append(element1);

		});
	
	
	
	// This function for increment / decrement quantity in cart
	$("#show").on('click', '.btn-inc-dec-qty', function() {
	
		var productid = $(this).data("productid");
		var quantity=$('#quantity'+productid).val();

		 //var str = $("#myInput").val()
		
		//alert($.cookie("product-cookie"));
		var jsonObj = JSON.parse($.cookie("product-cookie"));
		//alert(obj);
		
		for (var i = 0; i < jsonObj.length; i++) {
			//alert(jsonObj[i].productid);	//against product id update quantity
			  if (jsonObj[i].productid == productid) {
			    jsonObj[i].productname = quantity; //update quantity
			    
			    $.removeCookie('product-cookie');
			   
			    var cdata=[]
			    $.each(jsonObj,function(key, value) {
					
						cdata.push(value)
					
				});
				var date = new Date();
				date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

				$.cookie("product-cookie",JSON.stringify(cdata), {
					expires : date
				});
				
			    
			    
			    break;
			  }
			}
	
	});
	
	
//--------------------------------------------------------------------------------------------	

//this function is used increent/decrement value on button click
	$("#show").on('click', '.abc', function() {
		var proQty = $('.abc');

		proQty.on('click', '.catqtybtn', function(event) {
			var $button = $(this);
			var oldValue = $button.parent().find('input').val();
			if ($button.hasClass('inc')) {
				event.stopImmediatePropagation();
				if(oldValue<10)
				{
					var newVal = parseFloat(oldValue) + 1;
					$button.parent().find('input').val(newVal);
					return;
				}
				else
				{
					alert("You can buy Max 10 Qty");
					
				}
			} else {
				// Don't allow decrementing below zero
				if (oldValue > 1) {
					event.stopImmediatePropagation();
					var newVal = parseFloat(oldValue) - 1;
					$button.parent().find('input').val(newVal);
					return;
				} else {
					event.stopImmediatePropagation();
					newVal = 1;
					$button.parent().find('input').val(newVal);
					return;
				}
			}
		});
	});


//###============================### Product Page Code Start ###===========================================

$("#showSingleProduct").on('click', '.btn-add-cart', function() {

	var productid = $(this).data("productid");
	var category = $(this).data("cat");
	var productname = $(this).data("productname");
	var price = $(this).data("price");
	var imagepath = $(this).data("imagepath");
	var fkCatId = $(this).data("fkcategoryid");
	var packing = $(this).data("packing");
	var unit = $(this).data("unit");
	var manufacturer = $(this).data("manufacturer");
	var quantity=$('#quantityak').val();
	
	
	
	var total=price*quantity
	
	myCookiesCart["productid"] = productid;
	myCookiesCart["category"] = category;
	myCookiesCart["productname"] = productname;
	myCookiesCart["price"] = price;
	myCookiesCart["quantity"] = quantity;
	myCookiesCart["imagePath"] = imagepath;
	myCookiesCart["total"] = total;
	myCookiesCart["fkCatId"] = fkCatId;
	myCookiesCart["packing"] = packing;
	myCookiesCart["unit"] = unit;
	myCookiesCart["manufacturer"] = manufacturer;
	
	var cdata=[];
	var sflag=0;
	
	if (typeof $.cookie('product-cookie') === 'undefined'){
		
		cdata.push(myCookiesCart);  //if no cookie
		
		var date = new Date();
		date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

		$.cookie("product-cookie",JSON.stringify(cdata), {expires : date,path:'/'});
		
		
		} else {
			
			
			var jsonObj = JSON.parse($.cookie("product-cookie"));
			for (var i = 0; i < jsonObj.length; i++) {
				
				  if (jsonObj[i].productid == productid) {  
					  sflag=1;
				  }
			}
			
			if(sflag==0)
			{
				//if cookie is available
				var cartobj =  JSON.parse($.cookie("product-cookie"));
				$.each(cartobj,function(key, value)
				{
					cdata.push(value)
				});
				cdata.push(myCookiesCart);
				$.removeCookie('product-cookie');
			
				var date = new Date();
				date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

				$.cookie("product-cookie",JSON.stringify(cdata), {expires : date,path:'/'});
			}	
			else{
				alert("you have already added product to cart check your cart")
			}
			
		
		
		}

	
	//show cart bag 1	
	var cartobj =  JSON.parse($.cookie("product-cookie"));
	var element = $('<span>'+cartobj.length+'</span>');
	$("#showCartItemCount").append(element);
	
	//show cart bag 2
	var element1 = $('<span>'+cartobj.length+'</span>');
	$("#showCartItemCount2").append(element1);

});



//###============================### Product Page Code Start ###===========================================

//show cart bag 1	
var cartobj =  JSON.parse($.cookie("product-cookie"));
var element = $('<span>'+cartobj.length+'</span>');
$("#showCartItemCount").append(element);

//show cart bag 2
var element1 = $('<span>'+cartobj.length+'</span>');
$("#showCartItemCount2").append(element1);

}); //END  of MAIN FUNCTION 