const fs = require('fs-extra');

// Get the parameter passed from the script in the terminal
const myParameter = process.argv[2];

// Create a the page folder in src/screens
fs.mkdir(`src/screens/${myParameter}`, (error) => {
  if (error) {
    console.error(`Error creating folder: ${error}`);
  } else {
    // copy the files of the template folder
    fs.copySync('src/screens/TemplateFolder', `src/screens/${myParameter}`);

    // ======================================== //
    // Modify Types.tsx
    const typeContent = fs.readFileSync(
      `src/screens/${myParameter}/types.tsx`,
      'utf-8',
    );
    let modifiedTypeContent = typeContent.replace(
      'TEMPLATE_DATA_UPDATE',
      `${myParameter.toUpperCase()}_DATA_UPDATE`,
    );
    while (modifiedTypeContent.includes('TEMPLATE_DATA_UPDATE')) {
      modifiedTypeContent = modifiedTypeContent.replace(
        'TEMPLATE_DATA_UPDATE',
        `${myParameter.toUpperCase()}_DATA_UPDATE`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/types.tsx`,
        modifiedTypeContent,
        'utf-8',
      );
    }

    // ======================================== //
    // Modify Reducer.tsx
    const reducerContent = fs.readFileSync(
      `src/screens/${myParameter}/reducer.tsx`,
      'utf-8',
    );
    let modifiedReducerContent = reducerContent;
    while (modifiedReducerContent.includes('TEMPLATE_DATA_UPDATE')) {
      modifiedReducerContent = modifiedReducerContent.replace(
        'TEMPLATE_DATA_UPDATE',
        `${myParameter.toUpperCase()}_DATA_UPDATE`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/reducer.tsx`,
        modifiedReducerContent,
        'utf-8',
      );
    }

    // ======================================== //
    // Modify Action.tsx
    const actionContent = fs.readFileSync(
      `src/screens/${myParameter}/actions.tsx`,
      'utf-8',
    );
    let modifiedActionContent = actionContent;
    while (modifiedActionContent.includes('TEMPLATE_DATA_UPDATE')) {
      modifiedActionContent = modifiedActionContent.replace(
        'TEMPLATE_DATA_UPDATE',
        `${myParameter.toUpperCase()}_DATA_UPDATE`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/actions.tsx`,
        modifiedActionContent,
        'utf-8',
      );
    }
    modifiedActionContent = modifiedActionContent.replace(
      'templateViewChangeValue',
      `${myParameter}ChangeValue`,
    );
    fs.writeFileSync(
      `src/screens/${myParameter}/actions.tsx`,
      modifiedActionContent,
      'utf-8',
    );

    // ======================================== //
    // Modify Index.tsx
    const indexContent = fs.readFileSync(
      `src/screens/${myParameter}/index.tsx`,
      'utf-8',
    );
    let originalWord = myParameter;
    let lowerCaseWord = `${originalWord
      .charAt(0)
      .toLowerCase()}${originalWord.slice(1)}`;

    let modifiedIndexContent = indexContent;
    while (modifiedIndexContent.includes('templateViewChangeValue')) {
      modifiedIndexContent = modifiedIndexContent.replace(
        'templateViewChangeValue',
        `${myParameter}ChangeValue`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/index.tsx`,
        modifiedIndexContent,
        'utf-8',
      );
    }

    while (modifiedIndexContent.includes('TemplateFolder')) {
      modifiedIndexContent = modifiedIndexContent.replace(
        'TemplateFolder',
        `${myParameter}`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/index.tsx`,
        modifiedIndexContent,
        'utf-8',
      );
    }

    while (modifiedIndexContent.includes('templateReducer')) {
      modifiedIndexContent = modifiedIndexContent.replace(
        'templateReducer',
        `${lowerCaseWord}Reducer`,
      );
      fs.writeFileSync(
        `src/screens/${myParameter}/index.tsx`,
        modifiedIndexContent,
        'utf-8',
      );
    }

    // ======================================== //
    // Modify Screen index.tsx
    const indexScreenContent = fs.readFileSync(
      `src/screens/index.tsx`,
      'utf-8',
    );

    // Split the contents of the file into an array of lines
    const lines = indexScreenContent.split('\n');

    // Find the index of the first line that is not an import statement
    const lineIndex = lines.findIndex((line) => !line.startsWith('export'));

    // Insert the new string at the desired line
    lines.splice(
      lineIndex,
      0,
      `export {default as ${myParameter}} from './${myParameter}';`,
    );

    // Join the array of lines back into a single string
    const modifiedData = lines.join('\n');

    fs.writeFileSync(`src/screens/index.tsx`, modifiedData, 'utf-8');

    // ======================================== //
    // Modify Store index
    const indexStoreContent = fs.readFileSync(`src/store/index.tsx`, 'utf-8');

    // Split the contents of the file into an array of lines
    const importLines = indexStoreContent.split('\n');

    // Find the index of the first line that is not an import statement
    const importLineIndex = importLines.findIndex(
      (line) => !line.startsWith('import'),
    );

    // Insert the new string at the desired line
    importLines.splice(
      importLineIndex,
      0,
      `import ${myParameter}Reducer from 'src/screens/${myParameter}/reducer';`,
    );

    // Join the array of lines back into a single string
    const modifiedImportData = importLines.join('\n');

    fs.writeFileSync(`src/store/index.tsx`, modifiedImportData, 'utf-8');

    // Modify combine reducer
    const storeContent = fs.readFileSync(
        `src/store/index.tsx`,
        'utf-8',
      );
    
    const storeStatement = `${lowerCaseWord}Reducer: ${myParameter}Reducer,`
    const storeReducerLines = storeContent.split('\n');
    
    const functionStoreIndex = storeReducerLines.findIndex((line) =>
        line.startsWith('const Reducers = combineReducers({'),
      );
    
      const logStoreIndex = storeReducerLines.findIndex(
        (line, index) =>
          index > functionStoreIndex &&
          line.startsWith('});'),
      );
    
      storeReducerLines.splice(logStoreIndex, 0, storeStatement);
    
      const newStoreData = storeReducerLines.join('\n');
    
      fs.writeFileSync(
        'src/store/index.tsx',
        newStoreData,
        'utf8',
      );

    // ======================================== //
    // Modify Navigation
    // Add to import src/screens
    const navigationContent = fs.readFileSync(
      `src/navigation/registerScreens.tsx`,
      'utf-8',
    );

    const importNavigationRegex =
      /import\s*{([^}]+)}\s*from\s*['"]src\/screens['"];/;
    const navigationMatch = navigationContent.match(importNavigationRegex);

    const newString = ` ${myParameter},`;

    const newNavigationImport = `import {\n${newString}${navigationMatch[1]}} from 'src/screens';`;

    const updatedNavigationFile = navigationContent.replace(
      importNavigationRegex,
      newNavigationImport,
    );

    fs.writeFileSync(
      `src/navigation/registerScreens.tsx`,
      updatedNavigationFile,
    );

    // Add The navigation register component
    const navigationRegisterContent = fs.readFileSync(
        `src/navigation/registerScreens.tsx`,
        'utf-8',
      );
    const registrationStatement = `Navigation.registerComponent('${myParameter}', () => WrappedComponent(${myParameter}));`;

    const navRegisterLines = navigationRegisterContent.split('\n');

    const functionIndex = navRegisterLines.findIndex((line) =>
      line.startsWith('export default function'),
    );

    const logIndex = navRegisterLines.findIndex(
      (line, index) =>
        index > functionIndex &&
        line.startsWith("console.info('All screens have been registered...')"),
    );

    navRegisterLines.splice(logIndex - 3, 0, registrationStatement);

    const newRegistrationData = navRegisterLines.join('\n');

    // Write the modified string back to the file
    fs.writeFileSync(
      'src/navigation/registerScreens.tsx',
      newRegistrationData,
      'utf8',
    );
  }
});
