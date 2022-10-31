function pais(){
    var txt = window.document.querySelector('input#texto')
    var res = window.document.querySelector('div#res')
    var nacio = txt.value;
    res.innerHTML = `<p>Seu país de origem é <strong>${nacio}</strong></p>`;
        if (nacio == "Brasil" || nacio == "brasil") {
          res.innerHTML += `<p>Você é <strong>Brasileiro</strong>`;
        } else {
          res.innerHTML += `<p>Você é <strong>Estrangeiro</strong>`;
}
}