# CHANGELOG

## 1.0.0-beta.4 / 2021-07-14

* [Added] Add `allow_insecure` option for multistep steps in Synthetics. See [#212](https://github.com/DataDog/datadog-api-client-typescript/pull/212).
* [Added] Add support for ` GET /api/v2/application_keys/{app_key_id}`. See [#205](https://github.com/DataDog/datadog-api-client-typescript/pull/205).
* [Added] Add `meta` property with pagination info to `SLOCorrectionList` endpoint response. See [#202](https://github.com/DataDog/datadog-api-client-typescript/pull/202).
* [Added] Add support for `treemap` widget. See [#195](https://github.com/DataDog/datadog-api-client-typescript/pull/195).
* [Added] Add missing properties `query_index` and `tag_set` to `MetricsQueryMetadata`. See [#186](https://github.com/DataDog/datadog-api-client-typescript/pull/186).
* [Added] Add missing fields `hasExtendedTitle`, `type`, `version` and `updateAuthorId` for Security Monitoring Rule endpoints. See [#182](https://github.com/DataDog/datadog-api-client-typescript/pull/182).
* [Added] Dashboard RBAC role support. See [#179](https://github.com/DataDog/datadog-api-client-typescript/pull/179).
* [Added] Add missing fields in usage billable summary keys. See [#176](https://github.com/DataDog/datadog-api-client-typescript/pull/176).
* [Fixed] Fix `status` property name for browser error status in Synthetics. See [#213](https://github.com/DataDog/datadog-api-client-typescript/pull/213).
* [Fixed] Remove US only constraint for AWS tag filtering. See [#189](https://github.com/DataDog/datadog-api-client-typescript/pull/189).
* [Fixed] Handle null in query metrics unit. See [#184](https://github.com/DataDog/datadog-api-client-typescript/pull/184).
* [Security] Bump color-string from 1.5.4 to 1.5.5. See [#200](https://github.com/DataDog/datadog-api-client-typescript/pull/200).
* [Changed] Add separate schema for deleting AWS account. See [#211](https://github.com/DataDog/datadog-api-client-typescript/pull/211).
* [Changed] Specify format of `report_id` parameter. See [#209](https://github.com/DataDog/datadog-api-client-typescript/pull/209).
* [Changed] Remove Synthetics tick interval enum. See [#187](https://github.com/DataDog/datadog-api-client-typescript/pull/187).
* [Removed] Remove deprecated endpoints `/api/v1/usage/traces` and `/api/v1/usage/tracing-without-limits`. See [#215](https://github.com/DataDog/datadog-api-client-typescript/pull/215).

## 1.0.0-beta.3 / 2021-06-09

* [Added] Add monitor name and priority options. See [#173](https://github.com/DataDog/datadog-api-client-typescript/pull/173).
* [Fixed] Fix type of day/month response attribute in custom metrics usage. See [#170](https://github.com/DataDog/datadog-api-client-typescript/pull/170).
* [Added] Add CWS to usage metering endpoint. See [#155](https://github.com/DataDog/datadog-api-client-typescript/pull/155).
* [Changed] usage metering - rename compliance to cspm and add audit logs. See [#168](https://github.com/DataDog/datadog-api-client-typescript/pull/168).

## 1.0.0-beta.0 / 2021-05-31

* [Added] Initial beta release of the Datadog API Client
