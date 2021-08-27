# CHANGELOG

## 1.0.0-beta.5 / 2021-08-27

* [Added] Add config variables to Synthetics browser test config. See [#257](https://github.com/DataDog/datadog-api-client-typescript/pull/257).
* [Added] Add DBM usage endpoint. See [#244](https://github.com/DataDog/datadog-api-client-typescript/pull/244).
* [Added] Add `audit alert` monitor type. See [#254](https://github.com/DataDog/datadog-api-client-typescript/pull/254).
* [Added] Add `batch_id` to the synthetics trigger endpoint response. See [#252](https://github.com/DataDog/datadog-api-client-typescript/pull/252).
* [Added] Adding support for security monitoring rule `type` property. See [#242](https://github.com/DataDog/datadog-api-client-typescript/pull/242).
* [Added] Add events data source to Dashboard widgets. See [#243](https://github.com/DataDog/datadog-api-client-typescript/pull/243).
* [Added] Add restricted roles for Synthetics global variables. See [#248](https://github.com/DataDog/datadog-api-client-typescript/pull/248).
* [Added] Add webhooks integration. See [#247](https://github.com/DataDog/datadog-api-client-typescript/pull/247).
* [Added] Add missing synthetics variable parser type `x_path`. See [#246](https://github.com/DataDog/datadog-api-client-typescript/pull/246).
* [Added] Improve resiliency of typescript SDK when deserialising enums/oneOfs. See [#217](https://github.com/DataDog/datadog-api-client-typescript/pull/217).
* [Added] Add `audit_stream` to `ListStreamSource`. See [#236](https://github.com/DataDog/datadog-api-client-typescript/pull/236).
* [Added] Add percentile to dashboard `WidgetAggregator` schema. See [#232](https://github.com/DataDog/datadog-api-client-typescript/pull/232).
* [Added] Add `id_str` property to Event response. See [#238](https://github.com/DataDog/datadog-api-client-typescript/pull/238).
* [Added] Add edge to Synthetics devices. See [#241](https://github.com/DataDog/datadog-api-client-typescript/pull/241).
* [Added] Add endpoints to manage Service Accounts v2. See [#224](https://github.com/DataDog/datadog-api-client-typescript/pull/224).
* [Added] Add `new_group_delay` and deprecate `new_host_delay` monitor properties. See [#235](https://github.com/DataDog/datadog-api-client-typescript/pull/235).
* [Added] Add `include_descendants` param to usage attribution API. See [#240](https://github.com/DataDog/datadog-api-client-typescript/pull/240).
* [Added] Add support for list widget in dashboards. See [#206](https://github.com/DataDog/datadog-api-client-typescript/pull/206).
* [Added] Extend dashbords table widget requests to support formulas and functions. See [#223](https://github.com/DataDog/datadog-api-client-typescript/pull/223).
* [Added] Add CSPM to usage attribution. See [#214](https://github.com/DataDog/datadog-api-client-typescript/pull/214).
* [Added] Add support for dashboard bulk delete, restore endpoints. See [#204](https://github.com/DataDog/datadog-api-client-typescript/pull/204).
* [Added] Add support for audit logs data source in dashboards. See [#218](https://github.com/DataDog/datadog-api-client-typescript/pull/218).
* [Fixed] Fix DD_SITE management. See [#259](https://github.com/DataDog/datadog-api-client-typescript/pull/259).
* [Fixed] Minor fixes of the incident schema. See [#249](https://github.com/DataDog/datadog-api-client-typescript/pull/249).

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
