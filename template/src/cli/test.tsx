const fs = require('fs-extra');

// Get the parameter passed from the script in the terminal
const myParameter = process.argv[2];
    
const storeContent = fs.readFileSync(
    `src/store/index.tsx`,
    'utf-8',
  );

const storeStatement = `${myParameter}Reducer: ${myParameter}Reducer,`
const storeReducerLines = storeContent.split('\n');

const functionStoreIndex = storeReducerLines.findIndex(line =>
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