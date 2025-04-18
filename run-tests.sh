#!/usr/bin/env bash

# function finish {
#     rm private/bdd_runner/@rerun.txt
# }
# trap finish EXIT

yarn install --ignore-scripts
yarn workspace @datadog/datadog-api-client build
yarn workspace bdd-runner run build

# Check licenses
yarn run check-licenses || exit 1


# # Run unit tests
# if [ "${RECORD:-false}" == "false" ]; then
#     yarn run jest-test
#     TEST_RESULT=$?
#     if [ "$TEST_RESULT" -ne "0" ]; then
#         exit $TEST_RESULT
#     fi
# fi


# Run tests
yarn run bdd-test
# TEST_RESULT=$?
# if [ "$RECORD" == "none" ] && [ "$TEST_RESULT" -ne "0" ]; then
#     yarn run test:retry
#     TEST_RESULT=$?
# fi

exit $TEST_RESULT