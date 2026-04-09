# 🚗 API Gerenciamento de Carros (back-end)

# Sobre
Projeto de sistema de gerenciamento de carros escrito em JavaScript que permite as operações básicas (CRUD) via cURL.

## Habilidades Demonstradas
Ao navegar nestes dignissímos arquivos, confirmará que tenho domínio em:

- <b>CRUD</b>: fluxos de criação, leitura, atualização e deleção;
- <b>Banco de Dados</b>: queries MySQL;
- <b>API RESTful</b>: endpoints padronizados e organizados por recursos;
- <b>Clean Code</b>: modularização de rotas e separação de responsabilidades;
- <b>Tratamento de erros</b>.


# Rodando o Projeto
- Inicie o xampp/similar;
- Verifique no arquivo vars.env se as credenciais (DB_USER/DB_PASSWORD) estão iguais às que tu usa na tua máquina;
- Execute os comandos do arquivo db-commands.txt;
- Execute o comando `npm start`;


# Testes cURL

Obter todos os carros:
```bash
curl http://localhost:3000/api/cars
```

Obter um carro por placa:
```bash
curl http://localhost:3000/api/cars/plate/AAA-1234
```

Adicionar um carro:
```bash
curl -X POST http://localhost:3000/api/cars -d "id=2&model=UnoComEscadinha&plate=AAA-1234&color=Branco"
```

Editar um carro:
```bash
curl -X PUT http://localhost:3000/api/cars/2 -d "id=2&model=UnoComEscadinha&plate=AAA-1234&color=Preto"
```

Deletar um carro:
```bash
curl -X DELETE http://localhost:3000/api/cars/2
```

# Atualizações
<i>Últimas atualizações: 09/04/2026</i>

- Trabalhando no tratamento de erros;


# Tem que fazer (entre hoje e a volta e Cristo)

- [X] Melhorar padrão de rotas
- [ ] Centralizar tratamento de erros
- [ ] Validação de entrada
- [ ] Arquivo default e fallback de configs
- [ ] Melhorar documentação
- [ ] Checar body limit
- [ ] Logger de ambiente
- [ ] Padronizar convenções de nomes
- [ ] Refinar query handling
- [ ] Tomar um chá


₍^. .^₎⟆