#!/bin/bash

echo "🔥 NUCLEAR CACHE BUST DEPLOYMENT 🔥"

# Generate unique deployment ID
DEPLOY_ID=$(date +%s)_$(uuidgen | head -c 8)
echo "Deployment ID: $DEPLOY_ID"

# Update environment variable to force new build
echo "BUILD_ID=$DEPLOY_ID" > .env.local

# Clear all local caches
rm -rf .next
rm -rf node_modules/.cache
rm -rf .vercel

echo "Building with deployment ID: $DEPLOY_ID"

# Build and deploy
npm run build:clean

echo "✅ Nuclear cache bust complete! Deploy ID: $DEPLOY_ID"
echo "🚀 Your site should now show the new version immediately!"
echo "Look for: 🔥 LATEST BUILD $DEPLOY_ID 🔥"