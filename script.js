
     window.onload = function() {
        
      var senha = "#senha",
          button = "button",
          conta_digitos = "#legenda_digitos",
          cor_erro = "#rosa",
          cor_senha_corrigido = "#ebebe4",
          cor_legenda_digitos_correto = "#616161",
          corrigi_senha = document.querySelector("#corrigi_senha");
     	  corrigi_senha.style.display = "none",
     	  maximo_digitos = 6;

          
          
     	var buttons = document.getElementsByTagName("button");
     	for (var cont = 0; cont < buttons.length; cont++) {
     		buttons[cont].onclick = function() {
     		  document.querySelector(senha).value = document.querySelector(senha).value + this.value;

     		  var conta_digitos_senha = setInterval( function() {
              var legenda_digitos = document.querySelector(conta_digitos);
                  legenda_digitos.innerHTML = "Contando Digitos: " + document.querySelector(senha).value.length;
                  
                  if (document.querySelector(senha).value.length > maximo_digitos) {
                  	legenda_digitos.style.color = cor_erro;
                  	document.querySelector(senha).style.background = cor_erro;

                  	legenda_digitos.innerHTML = "O sistema encontrou: " + document.querySelector(senha).value.length + " Digitos";
                  	corrigi_senha.style.display = "block";
                     
                  }
     	     }, 000);
     	   }
     	} 

     	corrigi_senha.onclick = function() {
     		document.querySelector(senha).style.background = cor_senha_corrigido;
     		document.querySelector(senha).value = "";
     		document.querySelector(conta_digitos).style.color = cor_legenda_digitos_correto;
     		corrigi_senha.style.display = "none";
     		document.querySelector(conta_digitos).innerHTML = "Sua senha deve ter 6 digitos";
     	}
         
     }
	