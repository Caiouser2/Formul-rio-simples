# Formulário Simples

## Propósito do formulário: 
### Esse formulário foi criado para um desáfio tecninco, onde foi passado um teamplate para se tomar como referência.
### Toda a estrutura como tecnológias a serem usadas e design patterns foram livres para que o candidato escolhesse, contanto que cumprisse o objetivo de receber o input do usuário, e depois manda-lo para outra página mostrando as informações anteriormente passadas.

## Minhas escolhas:
### Eu decidi constuir o formulário em React por ser a tecnológia que mais domino.
<h3>
  Ao criar o formulário eu preferi não usar bibliotecas que facilittassem muito sua construção para haver um maior desafio lógico. 
  Segui uma simples Regra de Negócio que é: Não permitir a submissão do formulário sem que todos os campos estejam preenchidos preenchidos.
  <br/>
</h3>

### Para levar o usuário até a página onde é mostrada suas informações eu fiz um basico sistema de rotas usando React Router. 
### E para gaurdar as informações do usuário que serão mostradas posteriormente, eu optei por salvar um objeto no Local Storage, simulando uma ação semelhante ao envio das informações para um banco de dados, e depois fazendo o resgate delas via HTTP request, e depois aprensentá-las ao usuário.

## O que eu faria em um projeto real:
<h3>
Em casos que o form fosse para Produção, eu adicionaria mais condicionais para cada input do formulário, 
se necessario faria uso de bibliotecas para ter ainda mais domínio dos elementos contidos no form e otimizaria ainda mais o código para custar o miníno de processamento.   
</h3>

### *Para acessar o formulário baixe o repositório em sua maquina local, e use o comando <code>npm install</code> depois <code>npm start</code> para iniciar a aplicação.*
