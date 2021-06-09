#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 2
fi

# install dependencies
yarn

./extract-code-blocks.sh examples $1

# temporary fix to compile example files
find examples/$1 -type f -name "*.ts" | xargs sed -i.bak 's_@datadog/datadog-api-client_../../../index_1'

touch examples/$1/tsconfig.json

echo '{"compilerOptions":{"strict":true,"target":"es5","module":"commonjs","moduleResolution":"node","declaration":true,"esModuleInterop":true,"resolveJsonModule":true,"noImplicitAny":true,"noImplicitThis":true,"noUnusedLocals":false,"noUnusedParameters":false,"noImplicitReturns":true,"noFallthroughCasesInSwitch":true,"sourceMap":true,"noLib":false,"lib":["es5","es6","es7"]},"exclude":["dist","features","node_modules"],"include":["./**/*.ts"]}' > examples/$1/tsconfig.json

yarn tsc --build examples/$1

if [ $? -ne 0 ]; then
    echo -e "Failed to build examples"
    exit 1
fi
