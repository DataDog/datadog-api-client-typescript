#!/usr/bin/env bash

# Save the original NODE_OPTIONS value
ORIGINAL_NODE_OPTIONS=$NODE_OPTIONS
# Set NODE_OPTIONS to empty
export NODE_OPTIONS=""

function finish {
    rm -rf @rerun.txt
}
trap finish EXIT

# Docker setup
yarn install --ignore-scripts
set -e
yarn run build
set +e

# Check licenses
yarn run check-licenses || exit 1


# Reset NODE_OPTIONS to its original value, just for the tests
export NODE_OPTIONS=$ORIGINAL_NODE_OPTIONS

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
