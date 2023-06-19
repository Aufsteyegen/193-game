const fs = require('fs');
const path = require('path');

const folderPath = 'src/assets/countries';

// Read the contents of the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Iterate over each file in the folder
  files.forEach((file) => {
    const countryName = path.basename(file, '.glb');
    const countryFolderPath = path.join(folderPath, countryName);

    // Check if the folder exists for the current country
    fs.stat(countryFolderPath, (err, stats) => {
      if (err) {
        // Create the folder if it doesn't exist
        fs.mkdir(countryFolderPath, (err) => {
          if (err) {
            console.error(`Failed to create folder: ${countryFolderPath}`, err);
            return;
          }

          // Move the file to the corresponding country folder
          const sourcePath = path.join(folderPath, file);
          const destinationPath = path.join(countryFolderPath, file);
          fs.rename(sourcePath, destinationPath, (err) => {
            if (err) {
              console.error(`Failed to move file: ${sourcePath} to ${destinationPath}`, err);
            } else {
              console.log(`Moved file: ${sourcePath} to ${destinationPath}`);
            }
          });
        });
      } else if (stats.isDirectory()) {
        // Move the file to the corresponding country folder
        const sourcePath = path.join(folderPath, file);
        const destinationPath = path.join(countryFolderPath, file);
        fs.rename(sourcePath, destinationPath, (err) => {
          if (err) {
            console.error(`Failed to move file: ${sourcePath} to ${destinationPath}`, err);
          } else {
            console.log(`Moved file: ${sourcePath} to ${destinationPath}`);
          }
        });
      }
    });
  });
});
