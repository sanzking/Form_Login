function Login() {
	var usr = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	if (usr == "" && pwd == "") {
		document.getElementById("error").innerHTML = "Masukan username atau password anda";
		return false;
	}
	if (usr == "admin" && pwd == "admin123") {
		document.getElementById("cek").innerHTML = "Login berhasil";
		return false;
	}
	else {
		document.getElementById("error").innerHTML = "Username atau Password salah";
		return false;
	}
}

function myFunction() {
	document.getElementById("form").reset();
}