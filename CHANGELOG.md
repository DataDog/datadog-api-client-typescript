# CHANGELOG

## 1.0.0-beta.9 / 2022-03-03

### Fixed
* Fix event intake response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/541
* Fix type for `date` field in `LogsByRetentionMonthlyUsage` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/553
* Make `typedoc` a devDependency by @Nevon in https://github.com/DataDog/datadog-api-client-typescript/pull/554
### Added
* [Synthetics] Add missing option for SSL tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/544
* Add impossible travel detection method by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/548
* Add CI App usage endpoint and usage summary columns by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/552
### Removed
* Don't distribute tests directory by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/547

## New Contributors
* @Nevon made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/554

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.0.0-beta.8...v1.0.0-beta.9

## 1.0.0-beta.8 / 2022-02-18

### Fixed
* Handle lack of process variable by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/494
* Add missing type to `CloudWorkloadSecurityAgentRuleAttributes` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/529
* Add missing type to enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/531
* Add nullable user relationships to incidents and use this relationship schema for `commander_user` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/495
### Added
* Add organization metadata to additional Usage API responses by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/504
* Add support for formula and function in monitors by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/508
* Add endpoint for managing SAML AuthN mappings by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/506
* [Synthetics] Add `isCritical` to browser test steps by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/513
* Add metrics bulk-config endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/510
* Add support for "estimated usage attribution" by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/526
* Add org metadata for all hourly usage endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/530
### Changed
* Add CSPM usage fields and change properties to nullable doubles by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/488
* Use cross-fetch instead of node-fetch by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/498
* Add synthetics test result failure field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/505
* Refactor internal APIs by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/515
* Fix funnel steps definition by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/521
* Extract incident meta object by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/525
### Security
* Bump node-fetch from 2.6.1 to 2.6.7 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/500

## New Contributors
* @skarimo made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/509

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.0.0-beta.7...v1.0.0-beta.8

## 1.0.0-beta.7 / 2022-01-21

* [Added] Add `filter[deleted]` parameter for searching recently deleted dashboards. See [#479](https://github.com/DataDog/datadog-api-client-typescript/pull/479).
* [Added] Expose new signal configuration for timeout. See [#484](https://github.com/DataDog/datadog-api-client-typescript/pull/484).
* [Added] Add support for authentication and proxy options in Synthetics. See [#443](https://github.com/DataDog/datadog-api-client-typescript/pull/443).
* [Added] Support formulas and functions in Treemap Widget. See [#473](https://github.com/DataDog/datadog-api-client-typescript/pull/473).
* [Added] Add Cloud Workload Security Agent Rules API. See [#460](https://github.com/DataDog/datadog-api-client-typescript/pull/460).
* [Added] Add `offset` and `limit` parameters to usage listing endpoint. See [#466](https://github.com/DataDog/datadog-api-client-typescript/pull/466).
* [Added] Add monthly usage attribution API spec. See [#452](https://github.com/DataDog/datadog-api-client-typescript/pull/452).
* [Added] Add missing hosts metadata fields. See [#447](https://github.com/DataDog/datadog-api-client-typescript/pull/447).
* [Added] Add `replay_session_count ` and update documentation for `rum_session_count`. See [#465](https://github.com/DataDog/datadog-api-client-typescript/pull/465).
* [Added] Add retry options for a step in Synthetics multistep test. See [#455](https://github.com/DataDog/datadog-api-client-typescript/pull/455).
* [Added] Document `author_name` in dashboard response. See [#453](https://github.com/DataDog/datadog-api-client-typescript/pull/453).
* [Added] Add organization metadata for RUM sessions usage and expose `rum_browser_and_mobile_session_count`. See [#448](https://github.com/DataDog/datadog-api-client-typescript/pull/448).
* [Added] Add endpoint to retrieve hourly usage attribution. See [#426](https://github.com/DataDog/datadog-api-client-typescript/pull/426).
* [Added] Add support for scoped application keys. See [#408](https://github.com/DataDog/datadog-api-client-typescript/pull/408).
* [Added] Add endpoint for cloning roles. See [#434](https://github.com/DataDog/datadog-api-client-typescript/pull/434).
* [Added] Add organization metadata for audit logs, CWS, CSPM, DBM. See [#440](https://github.com/DataDog/datadog-api-client-typescript/pull/440).
* [Added] Add `ci-pipelines alert` to monitors enum. See [#433](https://github.com/DataDog/datadog-api-client-typescript/pull/433).
* [Added] Add support for sunburst widget in dashboard. See [#438](https://github.com/DataDog/datadog-api-client-typescript/pull/438).
* [Added] Add Limit Note for Hourly Requests. See [#403](https://github.com/DataDog/datadog-api-client-typescript/pull/403).
* [Added] Add support for unstable operations. See [#402](https://github.com/DataDog/datadog-api-client-typescript/pull/402).
* [Added] Expose estimated logs usage in Usage Attribution API. See [#404](https://github.com/DataDog/datadog-api-client-typescript/pull/404).
* [Added] Add endpoint to get corrections applied to an SLO. See [#386](https://github.com/DataDog/datadog-api-client-typescript/pull/386).
* [Added] Expose `public_id` and `org_name` in Usage API response. See [#390](https://github.com/DataDog/datadog-api-client-typescript/pull/390).
* [Added] Document query in `MonitorSearchResult`. See [#387](https://github.com/DataDog/datadog-api-client-typescript/pull/387).
* [Added] Add 429 error responses. See [#371](https://github.com/DataDog/datadog-api-client-typescript/pull/371).
* [Added] Add support for profiled Fargate tasks in Usage API. See [#368](https://github.com/DataDog/datadog-api-client-typescript/pull/368).
* [Added] Add support for `websocket` synthetics tests. See [#369](https://github.com/DataDog/datadog-api-client-typescript/pull/369).
* [Added] Add support for Synthetics UDP API tests. See [#363](https://github.com/DataDog/datadog-api-client-typescript/pull/363).
* [Added] Add trigger synthetics tests endpoint. See [#337](https://github.com/DataDog/datadog-api-client-typescript/pull/337).
* [Added] Add RUM Units to usage metering API. See [#357](https://github.com/DataDog/datadog-api-client-typescript/pull/357).
* [Added] Add formulas and functions support to change widget. See [#263](https://github.com/DataDog/datadog-api-client-typescript/pull/263).
* [Added] Add support for Azure `automute` option. See [#343](https://github.com/DataDog/datadog-api-client-typescript/pull/343).
* [Added] Add v2 intake endpoint. See [#336](https://github.com/DataDog/datadog-api-client-typescript/pull/336).
* [Fixed] Clarify required fields for `SyntheticsAPIStep`, `SyntheticsAPITest`, and `SyntheticsBrowserTest`. See [#367](https://github.com/DataDog/datadog-api-client-typescript/pull/367).
* [Fixed] Fixes to Cloud Workload Security API. See [#477](https://github.com/DataDog/datadog-api-client-typescript/pull/477).
* [Fixed] Make downtime weekdays nullable. See [#457](https://github.com/DataDog/datadog-api-client-typescript/pull/457).
* [Fixed] Fix a typo in an incident field attribute description. See [#415](https://github.com/DataDog/datadog-api-client-typescript/pull/415).
* [Fixed] Fix `SecurityMonitoringSignal.attributes.tags` type. See [#417](https://github.com/DataDog/datadog-api-client-typescript/pull/417).
* [Fixed] Allow null in required field. See [#421](https://github.com/DataDog/datadog-api-client-typescript/pull/421).
* [Fixed] Be more resilient to plain text errors. See [#399](https://github.com/DataDog/datadog-api-client-typescript/pull/399).
* [Fixed] Fix monitor `timeout_h` example and limits. See [#382](https://github.com/DataDog/datadog-api-client-typescript/pull/382).
* [Fixed] Remove event title length constraint. See [#379](https://github.com/DataDog/datadog-api-client-typescript/pull/379).
* [Fixed] Mark `batch_id` in Synthetics Trigger CI response as nullable. See [#373](https://github.com/DataDog/datadog-api-client-typescript/pull/373).
* [Fixed] SLO Correction attributes `rrule` and `duration` can be nullable. See [#365](https://github.com/DataDog/datadog-api-client-typescript/pull/365).
* [Fixed] Change `UsageNetworkFlowsHour.indexed_event_count` to match actual API. See [#362](https://github.com/DataDog/datadog-api-client-typescript/pull/362).
* [Fixed] Fix type for `ratio_in_month` in usage metering. See [#352](https://github.com/DataDog/datadog-api-client-typescript/pull/352).
* [Changed] Use pako for compressing payloads. See [#487](https://github.com/DataDog/datadog-api-client-typescript/pull/487).
* [Changed] Remove read only fields in `EventCreateRequest`. See [#475](https://github.com/DataDog/datadog-api-client-typescript/pull/475).
* [Changed] Change pagination arguments for querying usage attribution. See [#451](https://github.com/DataDog/datadog-api-client-typescript/pull/451).
* [Changed] Fix required target in Synthetics assertions and type in step results. See [#366](https://github.com/DataDog/datadog-api-client-typescript/pull/366).
* [Deprecated] Remove session counts from RUM units response. See [#429](https://github.com/DataDog/datadog-api-client-typescript/pull/429).
* [Removed] Remove deprecated AgentRule field in Security Rules API for CWS. See [#446](https://github.com/DataDog/datadog-api-client-typescript/pull/446).

## 1.0.0-beta.6 / 2021-11-03

* [Added] Added `available_values` property to template variables schema. See [#258](https://github.com/DataDog/datadog-api-client-typescript/pull/258).
* [Added] Add `follow_redirects` options to test request in Synthetics. See [#267](https://github.com/DataDog/datadog-api-client-typescript/pull/267).
* [Added] ApmDependencyStatsQuery for formulas and functions dashboard widgets. See [#278](https://github.com/DataDog/datadog-api-client-typescript/pull/278).
* [Added] Add formula and function APM resource stats query definition for dashboards. See [#279](https://github.com/DataDog/datadog-api-client-typescript/pull/279).
* [Added] Add support for funnel widget in dashboards. See [#286](https://github.com/DataDog/datadog-api-client-typescript/pull/286).
* [Added] Add information about creator to Synthetics tests details. See [#295](https://github.com/DataDog/datadog-api-client-typescript/pull/295).
* [Added] Add support for gzip and deflate encoding. See [#291](https://github.com/DataDog/datadog-api-client-typescript/pull/291).
* [Added] Add support for formulas and functions in the Scatterplot Widget for dashboards. See [#284](https://github.com/DataDog/datadog-api-client-typescript/pull/284).
* [Added] Document encoding in metrics intake. See [#306](https://github.com/DataDog/datadog-api-client-typescript/pull/306).
* [Added] Add `servername` property to SSL Synthetics tests request. See [#305](https://github.com/DataDog/datadog-api-client-typescript/pull/305).
* [Added] Add `renotify_occurrences` and `renotify_statuses` monitor options. See [#315](https://github.com/DataDog/datadog-api-client-typescript/pull/315).
* [Added] Add `type` and `is_template` properties to notebooks. See [#317](https://github.com/DataDog/datadog-api-client-typescript/pull/317).
* [Added] Add endpoint to get details of a Synthetics batch. See [#262](https://github.com/DataDog/datadog-api-client-typescript/pull/262).
* [Added] Add SDS to usage metering endpoint. See [#321](https://github.com/DataDog/datadog-api-client-typescript/pull/321).
* [Added] Add `metrics_collection_enabled`, `cspm_resource_collection_enabled ` and `resource_collection_enabled` to AWS integration request. See [#319](https://github.com/DataDog/datadog-api-client-typescript/pull/319).
* [Added] Add `apm_stats_query` property to `DistributionWidgetRequest`. See [#328](https://github.com/DataDog/datadog-api-client-typescript/pull/328).
* [Added] Add aggregations attribute to v2 metric tag configuration. See [#273](https://github.com/DataDog/datadog-api-client-typescript/pull/273).
* [Added] Add support for RRULE fields in SLO corrections. See [#302](https://github.com/DataDog/datadog-api-client-typescript/pull/302).
* [Added] Improve typescript server management. See [#322](https://github.com/DataDog/datadog-api-client-typescript/pull/322).
* [Fixed] Fix SLO history error response type for overall errors. See [#265](https://github.com/DataDog/datadog-api-client-typescript/pull/265).
* [Fixed] Bump url-parse from 1.5.1 to 1.5.2. See [#270](https://github.com/DataDog/datadog-api-client-typescript/pull/270).
* [Fixed] Mark SLO Correction Type as required. See [#264](https://github.com/DataDog/datadog-api-client-typescript/pull/264).
* [Fixed] Make the name property required for APM Dependency Stat Query Dashboard Widget. See [#283](https://github.com/DataDog/datadog-api-client-typescript/pull/283).
* [Fixed] Show body content for unknown responses. See [#287](https://github.com/DataDog/datadog-api-client-typescript/pull/287).
* [Fixed] Fix typo in usage attribution field names for profiled containers. See [#296](https://github.com/DataDog/datadog-api-client-typescript/pull/296).
* [Fixed] Make sure that OpenAPI definition are valid with real server responses. See [#294](https://github.com/DataDog/datadog-api-client-typescript/pull/294).
* [Fixed] Fix incidents schemas. See [#303](https://github.com/DataDog/datadog-api-client-typescript/pull/303).
* [Fixed] `IncidentFieldAttributesMultipleValue` can be nullable. See [#304](https://github.com/DataDog/datadog-api-client-typescript/pull/304).
* [Fixed] Remove event title length constraint. See [#300](https://github.com/DataDog/datadog-api-client-typescript/pull/300).
* [Fixed] Use plural form for dbm hosts usage properties. See [#312](https://github.com/DataDog/datadog-api-client-typescript/pull/312).
* [Security] Bump tmpl from 1.0.4 to 1.0.5. See [#289](https://github.com/DataDog/datadog-api-client-typescript/pull/289).
* [Changed] Fix SLO history schema for groups and monitors fields. See [#272](https://github.com/DataDog/datadog-api-client-typescript/pull/272).
* [Changed] Remove metadata from required list for metric SLO history endpoint. See [#277](https://github.com/DataDog/datadog-api-client-typescript/pull/277).
* [Changed] Use AVG aggregation function for DBM queries. See [#290](https://github.com/DataDog/datadog-api-client-typescript/pull/290).
* [Changed] Enable compression in responses. See [#314](https://github.com/DataDog/datadog-api-client-typescript/pull/314).
* [Changed] Update Synthetics CI test metadata. See [#311](https://github.com/DataDog/datadog-api-client-typescript/pull/311).
* [Deprecated] Update property descriptions for Dashboard RBAC release. See [#335](https://github.com/DataDog/datadog-api-client-typescript/pull/335).

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
