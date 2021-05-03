# Podcastr         ![Logo Podcastr](/podcastr-next/public/favicon.png)

##### Podcastr é projeto desenvolvido com NextJS a partir do evento Next Level Week, promovido pela RocketSeat. O sistema exibe os podcast's cadastrados, com seus dados, além de tocar o áudio do podcast selecionado. O back-end foi desenvolvido por conta própria, além de ser adicionado o tratamento da responsividade.

## Pré-requisitos

 `yarn --version`<br>
  Para a execução do projeto é necessário ter instalado o gerenciador de pacotes yarn ou equivalente.
  
## Iniciando...

- `git clone https://github.com/VitorAndre/Podcast-NLW.git`
- `cd Podcast-NLW`
- `cd podcastr-next`
- `yarn install`
- `cd ../back-end`
- `yarn install`

Agora você poderá executar os vários comandos abaixo.

## Execução
  
 `yarn dev`<br>
  Para a execução do front-end utilizado, basta rodar o comando acima, na pasta podcastr-next, com o servidor rodando ao mesmo tempo.
  <br><br>
 `yarn dev`<br>
  Para utilizar o back-end desenvolvido para a aplicação, basta rodar o comando acima, que irá iniciar o servidor.
  <br><br><br>
  Para a execução de um servidor de teste, com dados já prontos, basta rodar o comando abaixo na pasta podcastr-next. Neste caso o servidor seria utilizado para evitar inserções no back-end próprio, agilizando o processo. <br>
 `yarn server`

## Documentação API
  A documentação Swagger se encontra no arquivo "Swagger - Podcastr.yaml" no caminho "back-end / documentação" ou no link: <br> https://app.swaggerhub.com/apis/VitorAndre/Podcastr/1.0.0
  
## Tecnologias utilizadas
  <strong>Front-end:</strong> NextJS / React;<br>
  <strong>Back-end:</strong> NodeJS, Express, MongoDB.<br>
