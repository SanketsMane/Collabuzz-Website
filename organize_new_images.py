import os
import shutil

# Change to the influencers directory
os.chdir('/Users/sanketmane/Collabuzz/astra/public/images/influencers')

# Get list of all screenshot files
all_files = os.listdir('.')
screenshot_files = [f for f in all_files if f.startswith('Screenshot') and f.endswith('.png')]
screenshot_files.sort()  # Sort by filename for consistency

print(f"Found {len(screenshot_files)} new screenshot files to organize")
print("Files to process:")
for i, f in enumerate(screenshot_files):
    print(f"  {i+1}. {f}")

# We need 4 male and 5 female images
# Based on the filenames and timestamps, I'll assign them carefully
# You should manually verify these assignments match the actual faces

if len(screenshot_files) >= 9:
    # Manual assignment - you should verify these match gender
    male_assignments = [
        screenshot_files[0],  # Screenshot 2025-10-23 at 1.19.41 PM.png
        screenshot_files[2],  # Screenshot 2025-10-23 at 1.20.04 PM.png  
        screenshot_files[4],  # Screenshot 2025-10-23 at 1.20.29 PM.png
        screenshot_files[6],  # Screenshot 2025-10-23 at 1.20.49 PM.png
    ]
    
    female_assignments = [
        screenshot_files[1],  # Screenshot 2025-10-23 at 1.19.48 PM.png
        screenshot_files[3],  # Screenshot 2025-10-23 at 1.20.15 PM.png
        screenshot_files[5],  # Screenshot 2025-10-23 at 1.20.42 PM.png
        screenshot_files[7],  # Screenshot 2025-10-23 at 1.21.06 PM.png
        screenshot_files[8],  # Screenshot 2025-10-23 at 1.21.11 PM.png
    ]
    
    print("\n=== ORGANIZING IMAGES ===")
    
    # Process male images
    for i, filename in enumerate(male_assignments):
        if os.path.exists(filename):
            new_name = f"male-{i+1}.png"
            print(f"🚹 MALE {i+1}: {filename} -> {new_name}")
            shutil.copy2(filename, new_name)
            print(f"   ✓ Created {new_name}")
    
    # Process female images  
    for i, filename in enumerate(female_assignments):
        if os.path.exists(filename):
            new_name = f"female-{i+1}.png"
            print(f"🚺 FEMALE {i+1}: {filename} -> {new_name}")
            shutil.copy2(filename, new_name)
            print(f"   ✓ Created {new_name}")
    
    print("\n=== GENDER MAPPING ===")
    print("👨 MALE INFLUENCERS:")
    print("  male-1.png -> Aarav Sharma (Gaming & Streaming)")
    print("  male-2.png -> Rohan Gupta (Business & Startups)")  
    print("  male-3.png -> Arjun Reddy (Marketing & Sales)")
    print("  male-4.png -> Vikram Joshi (IT & Tech)")
    
    print("\n👩 FEMALE INFLUENCERS:")
    print("  female-1.png -> Priya Patel (Business & Startups)")
    print("  female-2.png -> Kavya Singh (Lifestyle & Fashion)")
    print("  female-3.png -> Ananya Iyer (Career & Education)")
    print("  female-4.png -> Sneha Kapoor (Health & Fitness)")
    print("  female-5.png -> Ishita Mehta (Food & Travel)")
    
    print("\n⚠️  IMPORTANT: Please manually verify that:")
    print("   - male-*.png files contain male faces")
    print("   - female-*.png files contain female faces")
    print("   - If any assignments are wrong, manually rename the files")
    
else:
    print(f"❌ Not enough images found. Need at least 9, found {len(screenshot_files)}")

# Show final results
organized_files = [f for f in os.listdir('.') if f.startswith(('male-', 'female-')) and f.endswith('.png')]
print(f"\n=== FINAL RESULT ===")
print(f"Successfully organized {len(organized_files)} images:")
for f in sorted(organized_files):
    size = os.path.getsize(f)
    print(f"  ✓ {f} ({size:,} bytes)")