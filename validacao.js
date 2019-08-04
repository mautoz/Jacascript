		function inserirWarning(id, msg) {
			var saida = document.getElementById(id);
			saida.innerHTML = msg;
		}

		function removerWarnings(id, id2) {
			var alerta = document.getElementById(id);
			var alerta2 = document.getElementById(id2); 
			alerta.classList.remove("is-invalid");
			alerta2.innerHTML = "";
		}

		function verificaAcentos(strAcentuada) {
			var strAcentuada = strAcentuada.split('');
			var strSemAcento = new Array();
			var strTamanho = strAcentuada.length;
			var acentos = 	 "ÀÁÃàáãÉéÍíÓóÕõÚúÇç";
			var semAcento = "AAAaaaEeIiOoOoUuCc";
			for (var y = 0; y < strTamanho; y++) {
				if (acentos.indexOf(strAcentuada[y]) != -1) {
					strSemAcento[y] = semAcento.substr(acentos.indexOf(strAcentuada[y]), 1);
					return true;
				}
			}
			return false;
		}

		function validar() {
			var valido = true;
			var pass = document.getElementById("pass");
			var pass2 = document.getElementById("pass2");
			var nome = document.getElementById("nome").value;

			if(verificaAcentos(nome)) {
				var erroNome = document.getElementById("mensagem-nome-invalido");
				var inputNome = document.getElementById("nome");
				
				inputNome.classList.add("is-invalid");
				inserirWarning('mensagem-nome-invalido', "Por favor, não utilize acentuação ou caracteres especiais.");
				valido = false;
			}

			if(pass.value != pass2.value) {
				inserirWarning('erro-preenchimento', "Existem erros no cadastro! Verifique!");
				inserirWarning('mensagem-pass-invalido', "As senhas devem ser idênticas");

				pass.classList.add("is-invalid");
				pass2.classList.add("is-invalid");

				pass.value = '';
				pass2.value = '';
				valido = false;
			}
			return valido;
	    }
