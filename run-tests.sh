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

# Run tests
yarn run cucumber-js features/
TEST_RESULT=$?
if [ "$RERECORD_FAILED_TESTS" == "true" -a "$TEST_RESULT" -ne "0" ]; then
    RECORD=true yarn run cucumber-js @rerun.txt
    TEST_RESULT=$?
fi

exit $TEST_RESULT
