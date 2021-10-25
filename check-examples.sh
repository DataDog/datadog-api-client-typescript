#!/usr/bin/env bash

# install dependencies
yarn install --ignore-scripts

./extract-code-blocks.sh examples

# temporary fix to compile example files
find examples -type f -name "*.ts" | xargs sed -i.bak 's_@datadog/datadog-api-client_../../../index_1'

echo '{"compilerOptions":{"strict":true,"target":"es5","module":"commonjs","moduleResolution":"node","declaration":true,"esModuleInterop":true,"resolveJsonModule":true,"noImplicitAny":true,"noImplicitThis":true,"noUnusedLocals":false,"noUnusedParameters":false,"noImplicitReturns":true,"noFallthroughCasesInSwitch":true,"sourceMap":true,"noLib":false,"lib":["es5","es6","es7"],"outDir":"../../dist"},"exclude":["dist","features","node_modules"],"include":["./**/*.ts"]}' > examples/tsconfig.json

yarn tsc --build examples/

if [ $? -ne 0 ]; then
    echo -e "Failed to build examples"
    exit 1
fi
