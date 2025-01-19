# utf-8
# language: pt
 
Funcionalidade: Envio de pedido de seguro para veículo com confirmação de senha 
  Cenário: Tentativa de avanço no pedido de seguro do veículo quando campo de confirmação de senha fica incorreto
    Dado que o usuário está na aba Send Quote do site Tricentis
    E os demais campos obrigatórios foram preenchidos corretamente
    Quando o campo de Confirm Password fica diferente do campo de Password
    Então deve aparecer uma mensagem informando o erro
    E o usuário não deve conseguir concluir o pedido

