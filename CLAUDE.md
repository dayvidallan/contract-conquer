# CLAUDE.md — landing pública do LicitaçãoApp (`contract-conquer`)

Este repositório é **só a landing pública** de `https://licitacaoapp.com.br`. O produto
inteiro mora em outro repositório (`dayvidallan/v0-licitacao-inteligente-frontend`,
Next.js), publicado em `https://app.licitacaoapp.com.br`. Origem: gerado no Lovable
(`.lovable/project.json`, `README.md` é o prompt original, não documentação).

**Stack:** TanStack Start + React 19 + Tailwind v4 + shadcn/ui, deploy em Cloudflare
Workers pelo `.github/workflows/deploy.yml` a cada push em `main`.

**A página inteira é um arquivo:** `src/routes/index.tsx`. O resto de `src/components/ui/`
é shadcn intocado.

---

## 🚨 Isto aqui é conteúdo público, não código interno

Toda frase deste repositório é lida por prospect decidindo se contrata. **Antes de
escrever ou editar qualquer afirmação sobre o que o produto faz, conferir contra o
código do app** — nunca contra a intenção de produto, nunca contra o que o card de
plano anuncia.

Decisões de negócio, preço e promessa comercial são do Dayvid, não desta sessão.

---

## Contrato com o app — 3 rotas, e elas são EXTERNAS

A landing não tem banco. Ela lê tudo do app no SSR:

| rota | o que traz | fallback se falhar |
|---|---|---|
| `GET /api/planos-publico` | os cards de plano (preço real do `PlanoConfig`) | estado honesto na tela: *"Não conseguimos carregar os planos agora"* — **nunca preço inventado** |
| `GET /api/landing-conteudo-publico` | hero + banner de promoção + FAQ | texto embutido neste arquivo |
| `/api/whatsapp-planos-publico?plano=…` | destino dos 3 CTAs pagos (navegação, não fetch) | — |

🚨 **Mudar o formato consumido aqui quebra um deploy que não está neste repositório, e
vice-versa.** O nome `whatsapp-planos-publico` mente desde 18/08/2026 — ela leva ao
`/cadastro`, não ao WhatsApp — e continua com esse nome **porque o nome é o contrato**.

⚠️ A landing lê `destaqueLabel` do plano, mas o app **não manda esse campo** hoje; o selo
cai para o literal `"Mais popular"`. Não é defeito, é extensão prevista e não usada.

---

## 🚨 O fallback vai ao ar sozinho — trate como produção

`FAQ_PADRAO` e o fallback do hero em `src/routes/index.tsx` **não são rascunho**. Eles
renderizam sem deploy nenhum sempre que a API de conteúdo falha, ou quando alguém
desativa todas as FAQs em `/admin/landing` do app.

**Foi assim que 3 respostas falsas ficaram no ar-em-potencial por meses** (corrigido em
01/09/2026), sem nunca aparecer em tela nem em log:

- alegava monitorar *ComprasNet, BEC, Licitações-e, BLL, BNC* — a coleta real é o **PNCP**
  (`lib/pncp.ts` no app); `lib/portal-resolver.ts` só **resolve link** para aqueles portais,
  não coleta deles;
- alegava alerta *por WhatsApp* com *frequência configurável* — é **1 e-mail por
  oportunidade** (`lib/opportunity-notifications.ts`), sem WhatsApp e sem controle de
  frequência;
- alegava *"até 12 meses de proteção contra reajuste"* — **zero** ocorrência de política de
  reajuste no app.

Desde a mesma data, todo degrade emite uma linha JSON `{"evento":"landing_fallback",…}` no
`console.warn`, visível no painel de Logs do Worker, com `motivo` distinto por causa
(`http_404`, `lista_vazia`, `ausente_na_resposta`, `payload_…`, `excecao_…`).
**Não remover esse rastro:** sem ele, "a landing está servindo o texto embutido agora" volta
a ser um fato que não existe em lugar nenhum.

⚠️ O fallback do hero é conferido idêntico ao `HERO_PADRAO` do app
(`lib/landing-conteudo.ts`). Se um dos dois mudar, mudar o outro.

---

## Armadilhas do repositório

- 🚨 **`npm ci` quebrava com o lock que estava versionado** (`ajv` e `json-schema-traverse`
  ausentes) — e o workflow de deploy roda `npm ci`, então **nenhum push publicava**.
  Reparado em 01/09/2026 por `npm install`, sem subir versão de dependência nenhuma.
  Se voltar a acontecer, é isso: rode `npm install` e commite o lock.
- ⚠️ **`src/routeTree.gen.ts` é gerado** e o plugin reordena os imports a cada `vite dev`.
  Esse churn não vai para commit.
- ⚠️ `npx tsc` sem `node_modules` instalado baixa um pacote `tsc` falso do npm. Use
  `./node_modules/.bin/tsc --noEmit`.
- ⚠️ `.output/server/index.mjs` é bundle de **Worker**, não roda em `node`. Para exercitar
  o SSR localmente use `npm run dev` (porta 8080).

---

## Pendências conhecidas, não corrigidas

- `canonical` e `og:url` são `"/"` **relativo** — inútil para SEO e compartilhamento.
- 4 links do rodapé são `href="#"` mortos: Sobre, Contato, Termos de Uso, Política de
  Privacidade.
- O item "Sobre" do menu aponta para `#dashboard`.
- ⏳ **Unificar esta landing dentro do app Next.js está EM AVALIAÇÃO, não decidido**
  (diagnóstico de 01/09/2026). Se for adiante, **este workflow de deploy tem de ser
  desligado no mesmo movimento** — senão qualquer commit aqui republica a landing antiga
  por cima. **Remover este item quando a decisão for tomada.**
