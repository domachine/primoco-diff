## Für die Entwicklung starten

### Starten

- `npm ci`
- `pm2 start`

Die Website ist nun unter http://localhost:3000 erreichbar.

### Stoppen

- `pm2 kill`

## Staging starten

- `docker compose --profile staging up`

Die Website ist nun unter http://localhost:3000 erreichbar. Die mobile App ist unter http://localhost:3001 erreichbar.

### App CSS

- https://github.com/webpack/webpack/issues/14063#issuecomment-908073150
- https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#exporttype
