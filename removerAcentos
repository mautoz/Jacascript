//Créditos: https://gist.github.com/alisterlf/


	function removerAcento(strAcentuada) {
		var strAcentuada = strAcentuada.split('');
		var strSemAcento = new Array();
		var strTamanho = strAcentuada.length;
		var acentos = 	 "ÀÁÃàáãÉéÍíÓóÕõÚúÇç";
		var semAcento = "AAAaaaEeIiOoOoUuCc";
		for (var y = 0; y < strTamanho; y++) {
			if (acentos.indexOf(strAcentuada[y]) != -1) {
				strSemAcento[y] = semAcento.substr(acentos.indexOf(strAcentuada[y]), 1);
			} else
				strSemAcento[y] = strAcentuada[y];
		}
		strSemAcento = strSemAcento.join('');
		return strSemAcento;
	}
