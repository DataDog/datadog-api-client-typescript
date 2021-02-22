#!/usr/bin/env bash

function finish {
    rm -rf @rerun.txt
}
trap finish EXIT

# Docker setup
npm i
npm run build

# Check licenses
npm run check-licenses

# Run tests
npm run test
TEST_RESULT=$?
if [ "$RERECORD_FAILED_TESTS" == "true" -a "$TEST_RESULT" -ne 0 ]; then
    npm run test:rerecord
    TEST_RESULT=$?
fi

exit $TEST_RESULT
