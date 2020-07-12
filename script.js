  
  function consultaCep(){
    $('.progress-bar').show()//mostra a barra de progresso quando o botão é clicado
    let cep = document.getElementById('cep').value// lendo o DOM e pegando o valor
    let url = "https://viacep.com.br/ws/" +cep+ "/json/" // acessando a url do viaCep e passando valor [cep]
    
    $.ajax({url: url,//chamando a url do viaCep
    type: "GET",  // tipo de acesso para busca resultado de outra page
       success: function(response){// se for sucesso  a function imprime
        $('#logradouro').html(response.logradouro)
        $('#bairro').html(response.bairro)
        $('#localidade').html(response.localidade)
        $('#uf').html(response.uf)
        $('#titulo-cep').html('CEP : '+cep)
        $('.cep').show()
        $('.progress-bar').hide()


           }
           
    })
    
  }
  $(function() {// esconde a barra de progresso e a tabela do cep quando a page é carregada
    $('.cep').hide()
    $('.progress-bar').hide()
  })
 
 
 
