# TradersClub


## Estrutura

### Api
Contém um único arquivo com todas as requisições feitas, poderia ser feita uma separação em mais arquivos por contexto no caso da aplicação crescer.

### Components
Todos os componentes da aplicação, com ínico em `App`

### Reducers
Cotém todos os reducers, no caso foi utilizado apenas um, vejo que poderia ser quebrado em busca e formulário.

### Faltando
Ficou faltando validar campos obrigatórios no formulário, a ideia era aproveitar o `formControl` do estado de `CarForm` para validar o que era necessário em cada campo.