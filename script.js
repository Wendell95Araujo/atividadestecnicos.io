(function() {
	alertUpdate();
})();

function alertUpdate() {

	var cookieUpdate = getCookie('apk-update');

	
	if (cookieUpdate != '') {

		var UpdateVerify = parseInt(cookieUpdate);

		if (UpdateVerify == 105) {

		} if (UpdateVerify < 105) {
			var answer = confirm ("Este aplicativo foi atualizado para a versão 1.0.5." + "\n" +  "Deseja atualizar agora?")
			if (answer == true){
				setCookie('apk-update', 105);
				window.location="Atividades_Tecnicos_1.0.5.apk";
			} else{
			setCookie('apk-update', 10);
			} 
		} 
	} else{
		var answer = confirm ("Este aplicativo foi atualizado para a versão 1.0.5." + "\n" +  "Deseja atualizar agora?")
		if (answer == true){
			setCookie('apk-update', 105);
			window.location="Atividades_Tecnicos_1.0.5.apk";
		} else{
		setCookie('apk-update', 10);
		}
	}
	
}