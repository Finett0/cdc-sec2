#!/bin/bash

# Script para configurar os 3 ambientes no Git
# Execute: chmod +x scripts/setup-environments.sh && ./scripts/setup-environments.sh

set -e

echo "🚀 Configurando ambientes para deploy na Vercel..."
echo ""

# Verifica se está no branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Você precisa estar no branch main. Mudando para main..."
    git checkout main
fi

echo "📦 Atualizando branch main..."
git pull origin main || true

echo ""
echo "🌿 Criando branch staging..."
if git show-ref --verify --quiet refs/heads/staging; then
    echo "✅ Branch staging já existe"
else
    git checkout -b staging
    git push -u origin staging
    echo "✅ Branch staging criado e publicado"
fi

echo ""
echo "🌿 Criando branch develop..."
git checkout main
if git show-ref --verify --quiet refs/heads/develop; then
    echo "✅ Branch develop já existe"
else
    git checkout -b develop
    git push -u origin develop
    echo "✅ Branch develop criado e publicado"
fi

echo ""
git checkout main
echo "✅ Voltou para o branch main"

echo ""
echo "=========================================="
echo "✨ Configuração concluída!"
echo "=========================================="
echo ""
echo "📋 Próximos passos:"
echo ""
echo "1. Acesse: https://vercel.com/new"
echo "2. Importe este repositório"
echo "3. Configure as variáveis de ambiente em:"
echo "   Settings → Environment Variables"
echo ""
echo "4. Ou use a CLI da Vercel:"
echo "   npm install -g vercel"
echo "   vercel link"
echo ""
echo "Branches criados:"
echo "  • main     → Production (cdc-sec2.vercel.app)"
echo "  • staging  → Staging (cdc-sec2-git-staging.vercel.app)"
echo "  • develop  → Development (cdc-sec2-git-develop.vercel.app)"
echo ""
echo "Leia DEPLOY.md para mais informações!"
echo ""

