		function openSearch() {
			document.getElementById("myOverlay").style.display = "block";
		}

		function closeSearch() {
			document.getElementById("myOverlay").style.display = "none";
		}

		var x = document.getElementById("login");
		var y = document.getElementById("register");
		var z = document.getElementById("btn");
		function register() {
			x.style.left = "-450px";
			y.style.left = "50px";
			z.style.left = "110";
		}
		function login() {
			x.style.left = "50px";
			y.style.left = "450px";
			z.style.left = "110";
		}