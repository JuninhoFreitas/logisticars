# Logística RS

## Como rodar o projeto

1. Copie o .env.example e renomeie para .env
2. Altere as configurações como for necessário
3. Execute os seguintes comandos
```bash
# Iniciando o Directus e o banco de dados
docker compose up -d

# Applicando os schemas
npm run apply-latest 
# Se desejar desenvolver as extensões
# Entre no diretório de cada uma
# Instale os pacotes
npm i
# Execute os scripts como dev ou build
npm run dev

# Reinicie o container do directus
```