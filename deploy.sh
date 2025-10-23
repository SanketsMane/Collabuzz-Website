#!/bin/bash
echo "🚀 Starting clean deployment build..."

# Remove any potential cache files
rm -rf .next
rm -rf node_modules/.cache
rm -rf .vercel

# Install dependencies cleanly
npm ci --silent --no-fund --no-audit

# Build the project
npm run build

echo "✅ Build completed successfully!"