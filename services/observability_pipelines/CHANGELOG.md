# CHANGELOG

## 0.0.1-beta.5/2026-02-17

### Fixed
* Resolve issue where the go client cannot resolve between memoryBuffer and memoryBufferSize options [#3468](https://github.com/DataDog/datadog-api-client-typescript/pull/3468)

### Added
* [Workflow Automation] Add allowedValues to InputSchemaParameters [#3459](https://github.com/DataDog/datadog-api-client-typescript/pull/3459)
* Cloud SIEM - Add instantaneousBaseline to anomaly detection options [#3457](https://github.com/DataDog/datadog-api-client-typescript/pull/3457)
* Adding when full option to the Memory Buffer options as well [#3453](https://github.com/DataDog/datadog-api-client-typescript/pull/3453)
* Add OpenAPI documentation for cache property in dedupe processor in observability pipelines  [#3451](https://github.com/DataDog/datadog-api-client-typescript/pull/3451)
* Adding Buffer options to Observability Pipeline Destinations [#3427](https://github.com/DataDog/datadog-api-client-typescript/pull/3427)
* Expose use_legacy_search_syntax flag in the Observability Pipelines API [#3366](https://github.com/DataDog/datadog-api-client-typescript/pull/3366)
* Add support for routes in datadog logs destination [#3323](https://github.com/DataDog/datadog-api-client-typescript/pull/3323)
* Adding datastream to Open Search destination and adding Auth Strategy for Observability Pipeline API [#3304](https://github.com/DataDog/datadog-api-client-typescript/pull/3304)

## 0.0.1-beta.4/2026-01-15

### Added
* Add new Observability Pipelines components [#3232](https://github.com/DataDog/datadog-api-client-typescript/pull/3232)

## 0.0.1-beta.3/2026-01-08

### Added
* Add display_name to Observability Pipeline processors [#3162](https://github.com/DataDog/datadog-api-client-typescript/pull/3162)

## 0.0.1-beta.2/2025-12-17

### Security
* Bump the `datadog-api-client` min version [#3129](https://github.com/DataDog/datadog-api-client-typescript/pull/3129)

### Fixed
* obs_pipelines: make google auth optional [#3028](https://github.com/DataDog/datadog-api-client-typescript/pull/3028)
* OP make 'support_rules' field in parse_grok processor optional [#2545](https://github.com/DataDog/datadog-api-client-typescript/pull/2545)

### Changed
* Add processors groups to Observability Pipelines [#2971](https://github.com/DataDog/datadog-api-client-typescript/pull/2971)

### Added
* Add Google PubSub destination to the Observability Pipelines API [#2809](https://github.com/DataDog/datadog-api-client-typescript/pull/2809)
* Add 2.6.0 components to Observability Pipelines API Spec [#2570](https://github.com/DataDog/datadog-api-client-typescript/pull/2570)

## 0.0.1-beta.1/2025-05-28
