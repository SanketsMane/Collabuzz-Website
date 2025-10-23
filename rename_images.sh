#!/bin/bash

# Navigate to the influencers directory
cd /Users/sanketmane/Collabuzz/astra/public/images/influencers

# Get list of all screenshot files
screenshots=($(find . -name "Screenshot*" | head -9))

# Counter for renaming
male_counter=1
female_counter=1

echo "Found ${#screenshots[@]} screenshot files to rename"

# Rename files alternating between male and female
for i in "${!screenshots[@]}"; do
    if (( i % 2 == 0 )); then
        # Even index = male
        new_name="male-${male_counter}.png"
        ((male_counter++))
    else
        # Odd index = female  
        new_name="female-${female_counter}.png"
        ((female_counter++))
    fi
    
    echo "Renaming: ${screenshots[i]} -> ${new_name}"
    mv "${screenshots[i]}" "${new_name}"
    
    # Stop after 9 files (4 male + 5 female)
    if (( i >= 8 )); then
        break
    fi
done

echo "Renaming complete!"
ls -la *.png | head -10