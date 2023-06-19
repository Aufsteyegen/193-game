const fs = require('fs');
const path = require('path');

const componentsFolderPath = path.resolve(__dirname, 'src/components');
const countryFolderPath = path.resolve(__dirname, 'src/assets/countries');

// Read all JSX files in the components folder
fs.readdirSync(componentsFolderPath)
  .filter(file => file.endsWith('.jsx'))
  .forEach(file => {
    const countryName = path.parse(file).name;
    const sourceFilePath = path.resolve(componentsFolderPath, file);
    const destinationFolderPath = path.resolve(countryFolderPath, countryName);
    const destinationFilePath = path.resolve(destinationFolderPath, file);

    // Create the destination folder if it doesn't exist
    if (!fs.existsSync(destinationFolderPath)) {
      fs.mkdirSync(destinationFolderPath);
    }

    // Move the JSX file to the corresponding country folder
    fs.renameSync(sourceFilePath, destinationFilePath);
    console.log(`Moved ${file} to ${countryName} folder`);
  });
