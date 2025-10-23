#!/bin/bash

# Navigate to the influencers directory
cd /Users/sanketmane/Collabuzz/astra/public/images/influencers

# Array to store renamed files
declare -a males=()
declare -a females=()

echo "Starting image organization..."

# Manual renaming of specific files
files=(
    "Screenshot 2025-10-19 at 7.41.10 PM.png"
    "Screenshot 2025-10-11 at 6.49.02 PM.png"
    "Screenshot 2025-10-13 at 10.38.41 PM.png"
    "Screenshot 2025-10-16 at 10.45.22 AM.png"
    "Screenshot 2025-10-19 at 5.06.39 PM.png"
    "Screenshot 2025-10-21 at 3.18.11 PM.png"
    "Screenshot 2025-10-23 at 1.19.41 PM.png"
    "Screenshot 2025-10-19 at 2.28.52 PM.png"
    "Screenshot 2025-10-18 at 1.00.39 AM.png"
)

# Rename files
counter=1
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        if (( counter <= 4 )); then
            new_name="male-${counter}.png"
        else
            female_num=$((counter - 4))
            new_name="female-${female_num}.png"
        fi
        
        echo "Renaming: '$file' -> '$new_name'"
        mv "$file" "$new_name" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✓ Successfully renamed to $new_name"
        else
            echo "✗ Failed to rename $file"
        fi
        
        ((counter++))
        
        # Stop after 9 files
        if (( counter > 9 )); then
            break
        fi
    else
        echo "File not found: $file"
    fi
done

echo "Checking results..."
ls -la male-*.png female-*.png 2>/dev/null