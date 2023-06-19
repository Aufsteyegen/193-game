const fs = require('fs');
const path = require('path');

const countriesDir = 'src/assets/countries'; // Directory where the country files are located

fs.readdir(countriesDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${countriesDir}`);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(countriesDir, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${filePath}`);
        return;
      }

      // Extract country name from file name
      const countryName = file.split('.')[0];

      // Update GLTF file location in useGLTF and useGLTF.preload calls
      const updatedData = data.replace(
        /useGLTF\(\'\/src\/assets\/countries\/ALBANIA\.glb\'\)/g,
        `useGLTF('/src/assets/countries/${countryName}/${countryName}.glb')`
      ).replace(
        /useGLTF\.preload\(\'\/src\/assets\/countries\/ALBANIA\.glb\'\)/g,
        `useGLTF.preload('/src/assets/countries/${countryName}/${countryName}.glb')`
      );

      // Write the updated data back to the file
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file: ${filePath}`);
          return;
        }
        console.log(`Updated file: ${filePath}`);
      });
    });
  });
});
