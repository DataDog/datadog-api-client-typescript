#!/usr/bin/env bash

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


# Run unit tests
if [ "${RECORD:-false}" == "false" ]; then
    yarn run jest-test
    TEST_RESULT=$?
    if [ "$TEST_RESULT" -ne "0" ]; then
        exit $TEST_RESULT
    fi
fi


# Run tests
yarn run cucumber-js features/v2/rum.feature:66
TEST_RESULT=$?
if [ "$RERECORD_FAILED_TESTS" == "true" -a "$TEST_RESULT" -ne "0" ]; then
    yarn run test:rerecord
    TEST_RESULT=$?
fi

exit $TEST_RESULT
