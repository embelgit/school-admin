//this function to add product in cart (cookie)
var myCookiesCart = {};
// var data={items:[]};
var data = [];

$(function() {
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

			$.cookie("product-cookie",JSON.stringify(cdata), {
				expires : date
			});
			
			
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

					$.cookie("product-cookie",JSON.stringify(cdata), {
						expires : date
					});
				}	
				else{
					alert("you have already added product to cart check your cart")
				}
				
			
			
			}
	
		
			
		var cartobj =  JSON.parse($.cookie("product-cookie"));
		var element = $('<span>'+cartobj.length+'</span>');
				
		$("#showCartItemCount").append(element);

	});
	
});