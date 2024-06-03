import os

def rename_jpg_files():
    # Get a list of all files in the current directory
    files = os.listdir('.')
    
    # Filter out all jpg files
    jpg_files = [file for file in files if file.lower().endswith('.jpeg')]
    
    # Sort the files (optional but can be useful for consistent order)
    jpg_files.sort()
    
    # Rename the files
    for index, file in enumerate(jpg_files):
        new_name = f"{index + 1}.jpg"
        os.rename(file, new_name)
        print(f"Renamed '{file}' to '{new_name}'")

if __name__ == "__main__":
    rename_jpg_files()
