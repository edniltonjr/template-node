# __APP_NAME__

https://__APP_DOMAIN__

Criado pelo backstage a partir do `template-node`.

## Desenvolvimento

```sh
npm install
cp .env.example .env
npm run dev      # http://localhost:__APP_PORT__
npm test
```

## Deploy

Todo push na `main` roda `.github/workflows/deploy.yml`, que chama o workflow reutilizável
de `infra-workflows`: testes, build da imagem, push para o GHCR e `docker compose up` na VPS.

Variáveis de ambiente extras podem ser adicionadas no secret `APP_ENV` do repositório
(uma linha `CHAVE=valor` por variável).
