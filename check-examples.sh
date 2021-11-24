#!/usr/bin/env bash

# install dependencies
yarn install
yarn link

./extract-code-blocks.sh examples

cd ./examples/
yarn link "@datadog/datadog-api-client"
cd ../

yarn tsc --build examples/

if [ $? -ne 0 ]; then
    echo -e "Failed to build examples"
    exit 1
fi
