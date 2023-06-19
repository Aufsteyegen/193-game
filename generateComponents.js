const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const glbFolderPath = path.resolve(__dirname, 'src/assets/countries');
const outputFolderPath = path.resolve(__dirname, 'src/components');

// Get a list of all GLB files in the folder
const glbFiles = fs.readdirSync(glbFolderPath).filter(file => file.endsWith('.glb'));

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath);
}

// Loop through each GLB file and generate the React component using gltfjsx
glbFiles.forEach(glbFile => {
  const modelName = path.parse(glbFile).name;
  const outputPath = path.resolve(outputFolderPath, `${modelName}.jsx`);
  const glbFilePath = path.resolve(glbFolderPath, glbFile);

  // Run gltfjsx on the GLB file
  const command = `gltfjsx ${glbFilePath} -o ${outputPath}`;
  execSync(command, { stdio: 'inherit' });

  console.log(`Generated ${modelName}.jsx`);
});
