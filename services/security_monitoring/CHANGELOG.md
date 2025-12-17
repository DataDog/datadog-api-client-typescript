# CHANGELOG

## 0.0.1-beta.3/2025-12-17

### Security
* Bump the `datadog-api-client` min version [#3129](https://github.com/DataDog/datadog-api-client-typescript/pull/3129)

### Added
* Update security finding triage specs [#3118](https://github.com/DataDog/datadog-api-client-typescript/pull/3118)
* Cloud SIEM - Add instantaneousBaseline feature parameter. [#3081](https://github.com/DataDog/datadog-api-client-typescript/pull/3081)
* security_monitoring - Add signalOutput field to ThreatHuntingJobResponseAttributes schema [#3007](https://github.com/DataDog/datadog-api-client-typescript/pull/3007)
* Add suppression tags [#2989](https://github.com/DataDog/datadog-api-client-typescript/pull/2989)
* Security Monitoring - Update Signal Archive Reasons [#2945](https://github.com/DataDog/datadog-api-client-typescript/pull/2945)
* Add Static Analysis Rules Endpoints [#2875](https://github.com/DataDog/datadog-api-client-typescript/pull/2875)
* Add suppression list query string parameter [#2833](https://github.com/DataDog/datadog-api-client-typescript/pull/2833)
* Add sequence detection to security monitoring rules [#2789](https://github.com/DataDog/datadog-api-client-typescript/pull/2789)
* Security Monitoring - Validation Endpoint for Suppressions [#2740](https://github.com/DataDog/datadog-api-client-typescript/pull/2740)
* Create Cloud SIEM histsignals endpoints [#2735](https://github.com/DataDog/datadog-api-client-typescript/pull/2735)
* Security Monitoring - Related Suppressions for a Rule [#2720](https://github.com/DataDog/datadog-api-client-typescript/pull/2720)

### Changed
* Vulnerability Management - Update ListVulnerabilities endpoint query params and response schema [#3116](https://github.com/DataDog/datadog-api-client-typescript/pull/3116)
* add suppression version history [#3055](https://github.com/DataDog/datadog-api-client-typescript/pull/3055)
* Add Security Finding Ticketing endpoints [#3046](https://github.com/DataDog/datadog-api-client-typescript/pull/3046)
* Rename historical job API endpoints to threat hunting [#2940](https://github.com/DataDog/datadog-api-client-typescript/pull/2940)
* security_monitoring - Add indexes to deprecate index in ruleQuery [#2887](https://github.com/DataDog/datadog-api-client-typescript/pull/2887)
* Add support for vulnerability management - Add ListScannedAssetsMetadata new endpoint and update existing ones [#2883](https://github.com/DataDog/datadog-api-client-typescript/pull/2883)

### Removed
* Tag security findings Jira endpoints as unstable [#3094](https://github.com/DataDog/datadog-api-client-typescript/pull/3094)

### Fixed
* Security Monitoring - Fix payload of Validation Endpoint for Suppressions [#2749](https://github.com/DataDog/datadog-api-client-typescript/pull/2749)

## 0.0.1-beta.2/2025-08-12

### Added
* Support Host and IaC finding types in security notifications  [#2616](https://github.com/DataDog/datadog-api-client-typescript/pull/2616)
* Extended List Findings API to expose resource related Private IP Addresses to details [#2585](https://github.com/DataDog/datadog-api-client-typescript/pull/2585)
* Support Cloud SIEM scheduled rules in API client [#2567](https://github.com/DataDog/datadog-api-client-typescript/pull/2567)
* Flag IP case action [#2538](https://github.com/DataDog/datadog-api-client-typescript/pull/2538)

### Deprecated
* Deprecate signals triage v1 endpoints [#2577](https://github.com/DataDog/datadog-api-client-typescript/pull/2577)

## 0.0.1-beta.1/2025-05-28
