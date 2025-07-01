// This file is intentionally blank
// Use this file to add JavaScript to your project
document.querySelector("#submitButton").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "+5527988384017";
  
    let cliente = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let whatsapp = document.querySelector("#phone").value;
    let detalhes = document.querySelector("#message").value;
    let resp = document.querySelector("#respuesta");
  
    let uri = `https://wa.me/${telefono}`;
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          De: *_Ayti Soluções_*%0A%0A
          Meu nome: *${cliente}*%0A
          Email: *${email}*%0A
          Whatsapp: *${whatsapp}*%0A%0A
          *Detalhes do Problema:*%0A
          ${detalhes}%0A%0A
          Atte: https://wa.me/${whatsapp.replace(/\D/gim, '')}%0A`;
  
    if (cliente === "" || email === "" || whatsapp === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Esqueceu algo?, ${cliente}`;
      return false;
    }else{
      resp.classList.remove("fail");
      resp.classList.add("send");
      resp.innerHTML = `Enviando Mensagen por whatsapp, ${cliente}!`;
      window.open(url);
      return true;
    }
  });
  