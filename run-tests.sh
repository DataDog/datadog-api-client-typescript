#!/usr/bin/env bash

# function finish {
#     rm private/bdd_runner/@rerun.txt
# }
# trap finish EXIT

COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack enable
yarn install

if [ "$USE_BUILT_PACKAGES" == "false" ]; then
    echo "Building packages"
    yarn build
else
    yarn workspace @datadog/datadog-api-client build
fi

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
if [ "$USE_BUILT_PACKAGES" == "false" ]; then
    yarn run bdd-test
else
    yarn run bdd-test:built
fi
# TEST_RESULT=$?
# if [ "$RECORD" == "none" ] && [ "$TEST_RESULT" -ne "0" ]; then
#     yarn run test:retry
#     TEST_RESULT=$?
# fi

exit $TEST_RESULT