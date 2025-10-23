import os
import shutil

# Change to the influencers directory
os.chdir('/Users/sanketmane/Collabuzz/astra/public/images/influencers')

# Get list of all files
all_files = os.listdir('.')
screenshot_files = [f for f in all_files if f.startswith('Screenshot') and f.endswith('.png')]

print(f"Found {len(screenshot_files)} screenshot files")

# Take first 9 files and rename them
files_to_rename = screenshot_files[:9]

for i, filename in enumerate(files_to_rename):
    try:
        if i < 4:
            # First 4 are male
            new_name = f"male-{i+1}.png"
        else:
            # Next 5 are female
            new_name = f"female-{i-3}.png"
        
        print(f"Copying {filename} -> {new_name}")
        shutil.copy2(filename, new_name)
        print(f"✓ Successfully created {new_name}")
        
    except Exception as e:
        print(f"✗ Error renaming {filename}: {e}")

# List the results
png_files = [f for f in os.listdir('.') if f.endswith('.png') and ('male-' in f or 'female-' in f)]
print(f"\nCreated {len(png_files)} organized files:")
for f in sorted(png_files):
    print(f"  {f}")