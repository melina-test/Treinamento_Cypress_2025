# utf-8
# language: pt
 
Funcionalidade: Envio de pedido de seguro para veículo
  Cenário: Tentativa de envio de pedido de seguro de veículo preenchendo apenas informações obrigatórias
    Dado que o usuário acessa página de obter cotação do site Tricentis
    E o usuário seleciona a opção Automobile
    Quando o usuário preenche corretamente todos os campos obrigatórios para enviar o pedido de cotação
    Então o usuário deve ter seu envio concluído com sucesso