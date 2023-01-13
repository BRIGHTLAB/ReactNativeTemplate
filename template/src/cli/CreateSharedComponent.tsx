const fs = require('fs-extra');

// Get the parameter passed from the script in the terminal
const myParameter = process.argv[2];

fs.copyFile(
  'src/sharedComponents/TemplateSharedComponent.tsx',
  `src/sharedComponents/${myParameter}.tsx`,
  err => {
    if (err) throw err;

    // Modify shared component function naming
    const content = fs.readFileSync(
      `src/sharedComponents/${myParameter}.tsx`,
      'utf-8',
    );

    let modifiedContent = content.replace(
      'TEMPLATE_DATA_UPDATE',
      `${myParameter.toUpperCase()}_DATA_UPDATE`,
    );
    while (modifiedContent.includes('TemplateSharedComponent')) {
      modifiedContent = modifiedContent.replace(
        'TemplateSharedComponent',
        `${myParameter}`,
      );
      fs.writeFileSync(
        `src/sharedComponents/${myParameter}.tsx`,
        modifiedContent,
        'utf-8',
      );
    }

    // Modify Shared Component index.tsx
    const indexContent = fs.readFileSync(
      `src/sharedComponents/index.tsx`,
      'utf-8',
    );

    // Split the contents of the file into an array of lines
    const lines = indexContent.split('\n');

    // Find the index of the first line that is not an import statement
    const lineIndex = lines.findIndex(line => !line.startsWith('export'));

    // Insert the new string at the desired line
    lines.splice(
      lineIndex,
      0,
      `export {default as ${myParameter}} from './${myParameter}';`,
    );

    // Join the array of lines back into a single string
    const modifiedData = lines.join('\n');

    fs.writeFileSync(`src/sharedComponents/index.tsx`, modifiedData, 'utf-8');

    console.log('original.txt was copied to copy.txt');
  },
);
