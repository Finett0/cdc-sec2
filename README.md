# 🛡️ CDC Sec2 Landing Page

Landing page moderna para CDC Sec2 construída com Next.js 14, React e Tailwind CSS.

## 🚀 Deploy Multi-Ambiente (Vercel)

Este projeto está configurado para deploy automático na Vercel com 3 ambientes:

- **Production** (`main`) → `cdc-sec2.vercel.app`
- **Staging** (`staging`) → `cdc-sec2-git-staging.vercel.app`  
- **Development** (`develop`) → `cdc-sec2-git-develop.vercel.app`

### Setup Rápido

```bash
# 1. Configurar ambientes (cria branches staging e develop)
./scripts/setup-environments.sh

# 2. Ver comandos de deploy
./scripts/deploy-help.sh

# 3. Ler documentação completa
cat DEPLOY.md
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar build de produção
npm start

# Linting
npm run lint
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Stack Tecnológico

- **Framework:** Next.js 14
- **UI:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel
- **TypeScript:** 5.x

## 📁 Estrutura do Projeto

```
cdc-sec2/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── Header.tsx            # Cabeçalho
│   ├── Hero.tsx              # Seção hero
│   ├── Content.tsx           # Conteúdo principal
│   ├── SecurityConcerns.tsx  # Preocupações de segurança
│   ├── DevSecOps.tsx         # Seção DevSecOps
│   └── Footer.tsx            # Rodapé
├── scripts/
│   ├── setup-environments.sh # Setup de ambientes
│   └── deploy-help.sh        # Helper de deploy
├── .env.development          # Vars de ambiente - dev
├── .env.staging              # Vars de ambiente - staging
├── .env.production           # Vars de ambiente - prod
├── vercel.json               # Configuração Vercel
├── DEPLOY.md                 # Guia completo de deploy
└── package.json
```

## 🌐 Deploy

### Via Git (Automático)

```bash
# Development
git push origin develop

# Staging
git push origin staging

# Production
git push origin main
```

### Via Vercel CLI

```bash
# Preview
npm run deploy

# Production
npm run deploy:prod
```

Veja [DEPLOY.md](./DEPLOY.md) para guia completo.

## 🔐 Variáveis de Ambiente

Copie `.env.example` para `.env.local` para desenvolvimento local:

```bash
cp .env.example .env.local
```

Configure as variáveis no Vercel Dashboard para cada ambiente.

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Executar build de produção
- `npm run lint` - Executar linter
- `npm run deploy` - Deploy preview (Vercel CLI)
- `npm run deploy:prod` - Deploy production (Vercel CLI)
- `npm run deploy:staging` - Push para staging
- `npm run deploy:dev` - Push para develop

## 🤝 Workflow de Desenvolvimento

1. **Desenvolva** no branch `develop`
2. **Teste** no ambiente de development
3. **Merge** para `staging` e aprove
4. **Deploy** para `main` (production)

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DEPLOY.md](./DEPLOY.md) - Guia completo de deploy

## 💰 Custos

**Vercel Hobby Plan (FREE):**
- ✅ Deploys ilimitados
- ✅ 100GB bandwidth/mês
- ✅ Domínios personalizados
- ✅ HTTPS automático
- ✅ Preview deploys automáticos

## 📄 Licença

Este projeto é privado e proprietário.
