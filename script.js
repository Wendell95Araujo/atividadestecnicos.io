/*(function() {
	alertUpdate();
})();*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('footer').style.bottom = "0";
  } else {
    document.querySelector('footer').style.bottom = "-150px";
  }
  prevScrollpos = currentScrollPos;
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
	  document.querySelector('footer').style.bottom = "0";
	 }
}


/*function alertUpdate() {

	var cookieUpdate = getCookie('apk-tecnico-update');

	
	if (cookieUpdate != '') {

		var UpdateVerify = parseInt(cookieUpdate);

		if (UpdateVerify == 105) {

		} if (UpdateVerify < 105) {
			var answer = confirm ("Este aplicativo foi atualizado para a versão 1.0.5." + "\n" +  "Deseja atualizar agora?")
			if (answer == true){
				setCookie('apk-update', 105);
				window.location="Atividades_Tecnicos_1.0.5.apk";
			} else{
			setCookie('apk-tecnico-update', 10);
			} 
		} 
	} else{
		var answer = confirm ("Este aplicativo foi atualizado para a versão 1.0.5." + "\n" +  "Deseja atualizar agora?")
		if (answer == true){
			setCookie('apk-tecnico-update', 105);
			window.location="Atividades_Tecnicos_1.0.5.apk";
		} else{
		setCookie('apk-update', 10);
		}
	}
	
}*/