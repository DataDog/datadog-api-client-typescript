# Development

## Setup

Developing on this project requires Node 10+, and the Yarn.

## Testing

### Prerequisite

* `DD_TEST_CLIENT_API_KEY`: The Datadog API key to run integration tests against
* `DD_TEST_CLIENT_APP_KEY`: The Datadog Application key to run integration tests against

**IMPORTANT**: Do not use production keys.

### Commands

This project contains both Integration and Unit tests.
__Never__ run the test suite against an organization with production data.
The testing framework in this repository is `@cucumber/cucumber`, and can be executed via `yarn run test`.

By default integration tests use recorded API responses stored in cassettes. To record new API responses run the tests with `RECORD=true`. To run integration tests against API without recording cassettes, run the tests with `RECORD=none`.

**IMPORTANT**: 
When creating a PR that adds or updates a test, __never__ commit 
generated code, only commit test files being updated and any updated cassettes. 

Run test with `DEBUG=true` to display api server calls being made during test execution. This can be useful during debug time.

### Scenarios

All test scenarios as automatically generated and located in `features/v*/` folders.

### Step definitions

Implement new steps in `features/step_definitions/request_steps.ts`.

### Support files

Various support files are located in `features/support` directory:

- `given.ts`: implementation for `x-given` extension;
- `hooks.ts`: logic for skipping tests based on tags and other `Before` and `After` hooks;
- `templating.ts`: support for `{{ ... }}` in string objects and path lookup;
- `undo.ts`: implementation for `x-undo` extension;
- `vcr.ts`: request recording/replying;
- `world.ts`: test context;
- and others ...
