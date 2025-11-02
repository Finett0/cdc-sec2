# 🚀 Guia de Deploy - Vercel Multi-Ambiente

Este projeto está configurado para deploy automático na Vercel com 3 ambientes isolados.

## 📦 Estrutura de Ambientes

| Ambiente | Branch | URL Padrão |
|----------|--------|------------|
| **Production** | `main` | `cdc-sec2.vercel.app` |
| **Staging** | `staging` | `cdc-sec2-git-staging.vercel.app` |
| **Development** | `develop` | `cdc-sec2-git-develop.vercel.app` |

## 🎯 Setup Inicial (Faça uma vez)

### 1. Instalar Vercel CLI (opcional, mas recomendado)

```bash
npm install -g vercel
```

### 2. Login na Vercel

```bash
vercel login
```

### 3. Linkar o Projeto

```bash
vercel link
```

Siga as instruções e escolha criar um novo projeto ou linkar a um existente.

### 4. Criar as Branches

```bash
# Criar branch staging
git checkout -b staging
git push -u origin staging

# Criar branch develop
git checkout -b develop
git push -u origin develop

# Voltar para main
git checkout main
```

## ⚙️ Configurar Vercel Dashboard

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Vá em **Settings** → **Git**
3. Configure:
   - **Production Branch**: `main`
   - Habilite **Automatic deployments from Git**

4. Vá em **Settings** → **Environment Variables**
5. Adicione as variáveis para cada ambiente:

### Variáveis de Ambiente (por ambiente)

**Production:**
```
NEXT_PUBLIC_APP_NAME=CDC Sec2
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Preview (Staging):**
```
NEXT_PUBLIC_APP_NAME=CDC Sec2 (Staging)
NEXT_PUBLIC_ENVIRONMENT=staging
NEXT_PUBLIC_API_URL=https://api-staging.example.com
```

**Development:**
```
NEXT_PUBLIC_APP_NAME=CDC Sec2 (Dev)
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_API_URL=https://api-dev.example.com
```

## 🔄 Workflow de Deploy

### Deploy para Development
```bash
git checkout develop
# faça suas alterações
git add .
git commit -m "feat: nova funcionalidade"
git push origin develop
```
✅ Deploy automático em: `cdc-sec2-git-develop.vercel.app`

### Deploy para Staging
```bash
git checkout staging
git merge develop
git push origin staging
```
✅ Deploy automático em: `cdc-sec2-git-staging.vercel.app`

### Deploy para Production
```bash
git checkout main
git merge staging
git push origin main
```
✅ Deploy automático em: `cdc-sec2.vercel.app`

## 🎨 Deploy Manual (via CLI)

### Preview Deploy (não afeta produção)
```bash
vercel
```

### Production Deploy
```bash
vercel --prod
```

## 🔍 Verificar Status dos Deploys

```bash
# Listar deploys
vercel ls

# Ver detalhes do último deploy
vercel inspect
```

## 🌐 URLs Personalizadas (Opcional)

Você pode adicionar domínios personalizados em **Settings** → **Domains**:

- Production: `app.seudominio.com`
- Staging: `staging.seudominio.com`
- Development: `dev.seudominio.com`

## 💰 Custos

- **Hobby Plan (FREE)**:
  - ✅ Deploys ilimitados
  - ✅ 100GB bandwidth/mês
  - ✅ Domínios personalizados
  - ✅ HTTPS automático
  - ✅ Preview deploys

- **Pro Plan ($20/mês)** - Somente se precisar de:
  - Mais bandwidth
  - Analytics avançados
  - Mais membros no time

## 📝 Notas Importantes

1. **Não commite `.env.local`** - use apenas para desenvolvimento local
2. **Preview Deploys** - Cada PR gera automaticamente uma URL de preview
3. **Rollback** - Use o dashboard da Vercel para voltar para versões anteriores
4. **Analytics** - Habilite em Settings → Analytics (gratuito no Hobby)

## 🐛 Troubleshooting

### Build falhando?
```bash
# Teste localmente primeiro
npm run build
```

### Variáveis de ambiente não funcionando?
- Certifique-se que começam com `NEXT_PUBLIC_`
- Redeploye após adicionar novas variáveis

### Cache issues?
- Force um novo build no dashboard da Vercel
- Ou use: `vercel --force`

## 📚 Recursos

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js no Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

