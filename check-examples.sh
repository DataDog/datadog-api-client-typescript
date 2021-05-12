#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 2
fi

# Docker setup
yarn

./extract-code-blocks.sh examples $1

ls examples/$1/*.ts | xargs -P $(($(nproc)*2)) -n 1 yarn tsc
if [ $? -ne 0 ]; then
    echo -e "Failed to build examples"
    exit 1
fi
