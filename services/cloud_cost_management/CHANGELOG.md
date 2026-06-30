# CHANGELOG

## 0.0.1-beta.7/2026-06-30

### Added
* Add OpenAPI for Cloud Cost Management custom forecast endpoints [#4509](https://github.com/DataDog/datadog-api-client-typescript/pull/4509)
* Add int64 format and extract inline schemas [#4417](https://github.com/DataDog/datadog-api-client-typescript/pull/4417)
* Add metric filter query parameter to Cloud Cost Management tag metadata tag sources endpoint [#4415](https://github.com/DataDog/datadog-api-client-typescript/pull/4415)
* Update GetBudget API spec with cost query parameters and custom forecast fields [#4411](https://github.com/DataDog/datadog-api-client-typescript/pull/4411)
* Add OpenAPI spec for OAuth2 client endpoints [#4292](https://github.com/DataDog/datadog-api-client-typescript/pull/4292)
* Add OpenAPI specs for secmon-public-api datasets endpoints [#4269](https://github.com/DataDog/datadog-api-client-typescript/pull/4269)
* Add siem_12mo_retention and siem_6mo_retention to usage API [#4257](https://github.com/DataDog/datadog-api-client-typescript/pull/4257)
* Add serverless_apps_dsm_fargate_tasks fields to usage metering API [#4255](https://github.com/DataDog/datadog-api-client-typescript/pull/4255)
* Add Cloud Cost Management tag_metadata months endpoint [#4253](https://github.com/DataDog/datadog-api-client-typescript/pull/4253)
* Add observability pipelines splunk HEC metrics destination [#4251](https://github.com/DataDog/datadog-api-client-typescript/pull/4251)
* Add comparison to QueryValueWidgetRequest for surfacing the change indicator feature  [#4249](https://github.com/DataDog/datadog-api-client-typescript/pull/4249)
* Add OpenAPI definitions for path-param tag_description endpoints [#4205](https://github.com/DataDog/datadog-api-client-typescript/pull/4205)
* Cloud Cost Recommendations Search API [#4155](https://github.com/DataDog/datadog-api-client-typescript/pull/4155)
* Add Cloud Cost Management tag_metadata endpoints [#4153](https://github.com/DataDog/datadog-api-client-typescript/pull/4153)

## 0.0.1-beta.6/2026-05-15

### Added
* Add OpenAPI spec for cost-planning-api commitment program endpoints [#4135](https://github.com/DataDog/datadog-api-client-typescript/pull/4135)
* Add OpenAPI for Cloud Cost Management anomalies endpoints [#4128](https://github.com/DataDog/datadog-api-client-typescript/pull/4128)
* Document Cloud Cost Management v2 tags and tag_keys endpoints [#4115](https://github.com/DataDog/datadog-api-client-typescript/pull/4115)
* Add OpenAPI definition for CCM ListCostTagDescriptions [#4108](https://github.com/DataDog/datadog-api-client-typescript/pull/4108)
* Add OpenAPI definitions for CCM status endpoints [#4064](https://github.com/DataDog/datadog-api-client-typescript/pull/4064)
* Add Cloud Cost Management ListCostOCIConfigs endpoint [#4032](https://github.com/DataDog/datadog-api-client-typescript/pull/4032)

## 0.0.1-beta.5/2026-04-24

### Removed
* Remove unsupported operators from CCM Custom Allocation Rules feature [#3984](https://github.com/DataDog/datadog-api-client-typescript/pull/3984)

## 0.0.1-beta.4/2026-04-16

### Added
* Add missing params to ListCustomCostsFiles [#3908](https://github.com/DataDog/datadog-api-client-typescript/pull/3908)

## 0.0.1-beta.3/2026-02-17

### Changed
* Fix GetBudget endpoint to return BudgetWithEntries instead of BudgetValidationRequest [#3350](https://github.com/DataDog/datadog-api-client-typescript/pull/3350)
* Changed Metric SLO to support SLI specification [#3034](https://github.com/DataDog/datadog-api-client-typescript/pull/3034)

### Added
* Add budget validation endpoints [#3336](https://github.com/DataDog/datadog-api-client-typescript/pull/3336)

## 0.0.1-beta.2/2025-12-17

### Security
* Bump the `datadog-api-client` min version [#3129](https://github.com/DataDog/datadog-api-client-typescript/pull/3129)

### Changed
* Update description, operationId and examples for tag pipeline and custom allocation rules [#2877](https://github.com/DataDog/datadog-api-client-typescript/pull/2877)
* Add tag pipeline, custom allocation rule and get cloud account by id for AWS/Azure/GCP configs APIs [#2785](https://github.com/DataDog/datadog-api-client-typescript/pull/2785)

### Added
* Add docs for 404 not found error in cost-onboarding-api [#2667](https://github.com/DataDog/datadog-api-client-typescript/pull/2667)
* Document Cloud Cost Management GCP endpoints publicly [#2385](https://github.com/DataDog/datadog-api-client-typescript/pull/2385)

### Fixed
* [CCA-938][CCC-883] Audit existing CCM endpoints in OpenAPI spec [#2658](https://github.com/DataDog/datadog-api-client-typescript/pull/2658)

## 0.0.1-beta.1/2025-05-28
