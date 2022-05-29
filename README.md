# Estudos de APIs - Sabado

Nos estudos de hoje, refiz os codigos de ontem melhorando-os e consolidando ainda mais os meus estudos. Baixei a biblioteca `Material Ui` para baixar os inputs e botoes.

## Entendimento

### useState

>Retorna dois valores, um sendo a variável e uma função para setar o valor da variável.

### Axios

>È usado para retornar a promessa entre navegador e servidor. Para executar o `Axios` você precisa identificar o comando usando o `POST|GET|PUT|DELETE|PATCH`. A função recebe até dois parâmetros, o primeiro sendo a `url` e o segundo os dados `JSON`.

### localStorage

>Para manter o login na página, você coloca o `token` no `localStorage` porque assim você consegue recuperar o token salvo e verificar login. Quando você for deslogar, fazer uma função para apagar o token com `localStorage.clear()`.

### useEffect 

>Sempre é executado uma vez ao entrar na página, recebe dois parâmetros: O primeiro uma função e o segundo a lista de dependências. A função é executada sempre que algum item da lista de dependências mudar.

### Evento - onClick 

>Usado sempre que for clicado, usei esse evento para eviar as informações do email e senha para a `API`. 

### Evento - onCharge

>Usado quando algo mudar o valor, usei para pegar o valor do input de email e senha, para isso usei `e.target.value`.

