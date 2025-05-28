#!/usr/bin/env bash

function finish {
    rm -rf @rerun.txt
}
trap finish EXIT

COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack enable
yarn install
set -e
yarn run build
set +e

# Check licenses
yarn run check-licenses || exit 1


# Run unit tests
if [ "${RECORD:-false}" == "false" ]; then
    yarn run jest-test
    TEST_RESULT=$?
    if [ "$TEST_RESULT" -ne "0" ]; then
        exit $TEST_RESULT
    fi
fi


# Run tests
yarn run test
TEST_RESULT=$?
if [ "$RECORD" == "none" ]; then
    yarn run test:retry
    TEST_RESULT=$?
fi

exit $TEST_RESULT
