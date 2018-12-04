$('#cadastro').change(function(e) {
  let nome = $('#nome-form').val();
  $('#avatar-nome').html(nome);
  let cor_cabeca = $('#head').val();
  $("#avatar-cabeca").css("background-color", cor_cabeca);
  let cor_corpo = $('#body').val();
  $("#avatar-corpo").css("background-color", cor_corpo);

  let cabelo = $('#select-cabelo').val();
  $("#avatar-cabelo").attr("src", cabelo);

  let checkbox = document.querySelectorAll(".checkbox-acessorio").forEach(function(el){

    if(el.checked){
      let acessorio = document.getElementById(el.value);
      acessorio.classList.add("visivel");
    }
    else{
      let acessorio = document.getElementById(el.value);
      acessorio.classList.remove("visivel");
    };
  });







});
