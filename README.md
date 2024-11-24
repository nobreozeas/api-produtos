## Pré-requisitos

Para rodar o projeto, você precisará:

- **Docker** instalado.
  - Caso esteja utilizando **Windows**, recomendamos o uso do **WSL2** para rodar o Docker.
- **Nodemon** instalado globalmente no sistema. Para instalar, use:
  ```bash
  npm install -g nodemon
  ```

## Instruções para executar o projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Construir as imagens Docker**:
   Execute o seguinte comando para realizar o build e compor as imagens:
   ```bash
   docker-compose build
   ```

3. **Iniciar a aplicação com o Nodemon**:
   Após o Docker estar configurado, inicie a aplicação com:
   ```bash
   nodemon app.js
   ```
   Substitua `app.js` pelo nome do arquivo principal da aplicação, caso necessário.

4. **Acesse a aplicação**:
   - Acesse no navegador ou no cliente desejado usando o endereço:
     ```
     http://localhost:porta
     ```
   Substitua `porta` pela porta configurada no projeto.

## Observações

- Certifique-se de que o Docker está ativo antes de executar os comandos.
- Em caso de problemas, verifique se o **WSL2** está configurado corretamente no Windows.
