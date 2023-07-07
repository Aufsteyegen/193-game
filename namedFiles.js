import fs from 'fs';
import path from 'path';

async function getAllDirectories(rootDir) {
  const directories = [];

  async function traverseDirectories(currentDir) {
    try {
      const subdirs = await fs.promises.readdir(currentDir, { withFileTypes: true });

      for (const subdir of subdirs) {
        const fullPath = path.join(currentDir, subdir.name);

        if (subdir.isDirectory()) {
          directories.push(fullPath);
          await traverseDirectories(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory: ${currentDir}`, error);
    }
  }

  await traverseDirectories(rootDir);
  return directories;
}

async function runScript() {
  const scriptUrl = new URL(import.meta.url);
  const rootDir = path.join(path.dirname(scriptUrl.pathname), 'src', 'assets', 'countries');
  const directories = await getAllDirectories(rootDir);

  const formattedDirectories = directories.map(directory => {
    const folderName = path.basename(directory);
    return `"src/assets/countries/${folderName}/${folderName}.jsx"`;
  });
  const output = `[${formattedDirectories.join(', ')}]`;

  fs.writeFile('directories.txt', output, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Directories written to directories.txt');
    }
  });
}

runScript();
