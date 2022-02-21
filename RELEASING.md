# Releasing

This document summarizes the process of doing a new release of this project.
Release can only be performed by Datadog maintainers of this repository.

## Schedule
This project does not have a strict release schedule. However, we would make a release at least every 2 months.
  - No release will be done if no changes got merged to the `master` branch during the above mentioned window.
  - Releases may be done more frequently than the above mentioned window.

### Prerequisites
- Have [Node.js 12+](https://nodejs.org/en/)
- Ensure all CIs are passing on the master branch that we're about to release.

## Release Process

The release process is controlled and run by GitHub Actions.
### Prerequisite

1. Make sure you have `write_repo` access.
1. Share your plan for the release with other maintainers to avoid conflicts during the release process.

### Update Changelog

1. Open [prepare release](https://github.com/DataDog/datadog-api-client-typescript/actions/workflows/prepare_release.yml) and click on `Run workflow` dropdown.
1. Enter new version identifier in the `New version number` input box (e.g. `1.0.0-beta.10`).
1. Trigger the action by clicking on `Run workflow` button.

### Review

1. Review the generated pull-request for `release/<New version number>` branch.
1. If everything is fine, merge the pull-request.
1. Check that the [release](https://github.com/DataDog/datadog-api-client-typescript/actions/workflows/release.yml) action created new release on GitHub.

### Publish

1. A github action will kick off that builds and publishes this tag to NPM. Check that the [NPM package is published](https://www.npmjs.com/package/@datadog/datadog-api-client).
1. Review and merge generated `Post release` pull-request with `dev` version bump.