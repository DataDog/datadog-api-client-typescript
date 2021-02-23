#!/usr/bin/env bash

function finish {
    rm -rf @rerun.txt
}
trap finish EXIT

# Docker setup
yarn
yarn run build

# Check licenses
yarn run check-licenses || exit 1

# Run tests
yarn run test
TEST_RESULT=$?
if [ "$RERECORD_FAILED_TESTS" == "true" -a "$TEST_RESULT" -ne 0 ]; then
    yarn run test:rerecord
    TEST_RESULT=$?
fi

exit $TEST_RESULT
