#!/bin/bash
echo "🚀 Starting Collabuzz on Render..."

# Set the port (Render uses PORT environment variable)
export PORT=${PORT:-10000}

echo "Starting server on port $PORT"

# Start the Next.js server
npm start