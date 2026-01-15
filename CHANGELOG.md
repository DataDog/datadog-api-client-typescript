# CHANGELOG

## 1.51.0/2026-01-15

### Added
* Add subtest for synthetics multistep tests [#3270](https://github.com/DataDog/datadog-api-client-typescript/pull/3270)
* feat - Add data-quality alert monitor type support [#3266](https://github.com/DataDog/datadog-api-client-typescript/pull/3266)
* Add a new end point that allows the SPA recommendation to be called without the shard parameter [#3252](https://github.com/DataDog/datadog-api-client-typescript/pull/3252)
* Add Critical Assets specs to security_monitoring feature [#3244](https://github.com/DataDog/datadog-api-client-typescript/pull/3244)
* Add new Observability Pipelines components [#3233](https://github.com/DataDog/datadog-api-client-typescript/pull/3233)
* Specify accepted types for UpsertRows values [#3219](https://github.com/DataDog/datadog-api-client-typescript/pull/3219)
* Add subtest for synthetics multistep tests [#3197](https://github.com/DataDog/datadog-api-client-typescript/pull/3197)
* Add `query` param in rules list endpoint [#3181](https://github.com/DataDog/datadog-api-client-typescript/pull/3181)
* Add Security Findings Public API beta endpoints [#3138](https://github.com/DataDog/datadog-api-client-typescript/pull/3138)
* Add bar chart widget to Dashboards API [#3086](https://github.com/DataDog/datadog-api-client-typescript/pull/3086)
* Update distribution and heatmap's `markers` ,`num_buckets` properties and allowed request/query [#3084](https://github.com/DataDog/datadog-api-client-typescript/pull/3084)
* Add region_filter_configs and is_global_location_enabled to v2 GCP API [#3070](https://github.com/DataDog/datadog-api-client-typescript/pull/3070)

### Deprecated
* Update docs for Security Finding API endpoints [#3262](https://github.com/DataDog/datadog-api-client-typescript/pull/3262)

### Removed
* Revert - Update specs for AWS account updates and creation for CCM configs [#3239](https://github.com/DataDog/datadog-api-client-typescript/pull/3239)

### Fixed
* remove duplicate sync_enabled field for PATCH Reference Tables request schema [#3033](https://github.com/DataDog/datadog-api-client-typescript/pull/3033)

## 1.50.0/2026-01-08

### Added
* Add new bits_ai usage attribution type to Usage Attribution Public API Documentation [#3217](https://github.com/DataDog/datadog-api-client-typescript/pull/3217)
* Add Product Analytics Server-Side Events API endpoint [#3207](https://github.com/DataDog/datadog-api-client-typescript/pull/3207)
* Update /api/v2/cases endpoint to add custom attributes support [#3203](https://github.com/DataDog/datadog-api-client-typescript/pull/3203)
* Documentation for team notifications API [#3195](https://github.com/DataDog/datadog-api-client-typescript/pull/3195)
* [RQ-7160] Add llm_spans and deprecate llm_observability [#3167](https://github.com/DataDog/datadog-api-client-typescript/pull/3167)
* Add display_name to Observability Pipeline processors [#3163](https://github.com/DataDog/datadog-api-client-typescript/pull/3163)
* Add a new includeDiscovered query parameter to Software Catalog APIs [#3144](https://github.com/DataDog/datadog-api-client-typescript/pull/3144)
* Add routes for managing On-Call user notification rules [#3142](https://github.com/DataDog/datadog-api-client-typescript/pull/3142)
* Add anomaly detection options to security monitoring rules [#3136](https://github.com/DataDog/datadog-api-client-typescript/pull/3136)
* Remove preview/unstable tags from GitHub team sync and connections endpoints [#3131](https://github.com/DataDog/datadog-api-client-typescript/pull/3131)
* Added spec for flex_stored_logs [#3120](https://github.com/DataDog/datadog-api-client-typescript/pull/3120)
* Add documentation for synthetics global variable jsonpatch endpoint [#3045](https://github.com/DataDog/datadog-api-client-typescript/pull/3045)

### Changed
* Remove steps from certain expected synthetics api response [#3215](https://github.com/DataDog/datadog-api-client-typescript/pull/3215)
* Add documentation for GET, POST, PATCH, and DELETE api/v2/incidents/incident_id/attachments endpoints [#3091](https://github.com/DataDog/datadog-api-client-typescript/pull/3091)

## 1.49.0/2025-12-17

### Changed
* Mark Incident Impact Endpoints stable [#3134](https://github.com/DataDog/datadog-api-client-typescript/pull/3134)
* Vulnerability Management - Update ListVulnerabilities endpoint query params and response schema [#3117](https://github.com/DataDog/datadog-api-client-typescript/pull/3117)
* Update specs for AWS account updates and creation for CCM configs [#3103](https://github.com/DataDog/datadog-api-client-typescript/pull/3103)
* add suppression version history [#3056](https://github.com/DataDog/datadog-api-client-typescript/pull/3056)
* Add processors groups to Observability Pipelines [#2972](https://github.com/DataDog/datadog-api-client-typescript/pull/2972)

### Added
* Update security finding triage specs [#3121](https://github.com/DataDog/datadog-api-client-typescript/pull/3121)
* Add routes for managing On-Call user notification channels [#3109](https://github.com/DataDog/datadog-api-client-typescript/pull/3109)
* Add host field to Post an event V2 API [#3105](https://github.com/DataDog/datadog-api-client-typescript/pull/3105)
* Add `GET /api/v2/apm/services` endpoint to public documentation [#3099](https://github.com/DataDog/datadog-api-client-typescript/pull/3099)
* Dashboards - Add semantic_mode support to FormulaAndFunctionMetricQueryDefinition [#3088](https://github.com/DataDog/datadog-api-client-typescript/pull/3088)
* Cloud SIEM - Add instantaneousBaseline feature parameter. [#3082](https://github.com/DataDog/datadog-api-client-typescript/pull/3082)
* Add new fields to usage metering api spec [#3078](https://github.com/DataDog/datadog-api-client-typescript/pull/3078)
* update geomap widget definition about `conditional_format` and `text_formats` and view focus [#3066](https://github.com/DataDog/datadog-api-client-typescript/pull/3066)
* Add new endpoint for listing rules for a gate [#3039](https://github.com/DataDog/datadog-api-client-typescript/pull/3039)

### Removed
* Tag security findings Jira endpoints as unstable [#3095](https://github.com/DataDog/datadog-api-client-typescript/pull/3095)

### Fixed
* Add field attribute to the Workload Protection hash action [#3050](https://github.com/DataDog/datadog-api-client-typescript/pull/3050)

## 1.48.0/2025-12-08

### Added
* On-Call Add positioned schedule policy target [#3058](https://github.com/DataDog/datadog-api-client-typescript/pull/3058)
* Introduced new APIs to manage team hierarchy links [#3041](https://github.com/DataDog/datadog-api-client-typescript/pull/3041)
* Add Row Update Endpoints to Reference Tables API spec [#3021](https://github.com/DataDog/datadog-api-client-typescript/pull/3021)
* Add incident management seats  to spec [#3014](https://github.com/DataDog/datadog-api-client-typescript/pull/3014)
* Support provisioning teams from external sources [#3012](https://github.com/DataDog/datadog-api-client-typescript/pull/3012)
* security_monitoring - Add signalOutput field to ThreatHuntingJobResponseAttributes schema [#3008](https://github.com/DataDog/datadog-api-client-typescript/pull/3008)
* Add filter.scope to Monitor Notification Rules [#3002](https://github.com/DataDog/datadog-api-client-typescript/pull/3002)
* Add Support for Monitor Assets [#2982](https://github.com/DataDog/datadog-api-client-typescript/pull/2982)
* Add api specs for deployment gates [#2906](https://github.com/DataDog/datadog-api-client-typescript/pull/2906)

### Changed
* Add Security Finding Ticketing endpoints [#3047](https://github.com/DataDog/datadog-api-client-typescript/pull/3047)
* Flatten file_metadata response schema to avoid OneOf unmarshaling issues [#3018](https://github.com/DataDog/datadog-api-client-typescript/pull/3018)

### Fixed
* obs_pipelines: make google auth optional [#3029](https://github.com/DataDog/datadog-api-client-typescript/pull/3029)

## 1.47.0/2025-11-14

### Added
* Add suppression tags [#2990](https://github.com/DataDog/datadog-api-client-typescript/pull/2990)
* Add Team Connection API Documentation [#2986](https://github.com/DataDog/datadog-api-client-typescript/pull/2986)
* Add new summary keys for new standalone billing dimensions [#2980](https://github.com/DataDog/datadog-api-client-typescript/pull/2980)
* Add Bits AI Investigations and On-Call to  API specs [#2974](https://github.com/DataDog/datadog-api-client-typescript/pull/2974)
* Add `PreviewCatalogEntities` [#2966](https://github.com/DataDog/datadog-api-client-typescript/pull/2966)
* Sync 'audience_management.yaml' files with backend [#2962](https://github.com/DataDog/datadog-api-client-typescript/pull/2962)
* Dashboards - Add on_call_events datasources [#2961](https://github.com/DataDog/datadog-api-client-typescript/pull/2961)
* 📝 [LOGSAC-1298] Add logs-pipeline type to restriction policy OpenAPI spec [#2949](https://github.com/DataDog/datadog-api-client-typescript/pull/2949)
* Security Monitoring - Update Signal Archive Reasons [#2946](https://github.com/DataDog/datadog-api-client-typescript/pull/2946)
* Add New Serverless Summary Entries to Api Spec [#2916](https://github.com/DataDog/datadog-api-client-typescript/pull/2916)
* Add metric namespace config filters to V2 GCP API [#2914](https://github.com/DataDog/datadog-api-client-typescript/pull/2914)
* Add specs for v2 eventbridge API [#2909](https://github.com/DataDog/datadog-api-client-typescript/pull/2909)
* Add last_login_time to Users v2 API [#2882](https://github.com/DataDog/datadog-api-client-typescript/pull/2882)
* Add Static Analysis Rules Endpoints [#2876](https://github.com/DataDog/datadog-api-client-typescript/pull/2876)

### Deprecated
* [api-spec] Mark PATCH /api/v2/incidents/incident_id/attachments endpoint as deprecated [#2984](https://github.com/DataDog/datadog-api-client-typescript/pull/2984)
* [METEXP-2068] Deprecate api/v1/search Endpoint [#2976](https://github.com/DataDog/datadog-api-client-typescript/pull/2976)

### Changed
* Rename historical job API endpoints to threat hunting [#2941](https://github.com/DataDog/datadog-api-client-typescript/pull/2941)

## 1.46.0/2025-10-27

### Added
* Add endpoints for Software Composition Analysis [#2939](https://github.com/DataDog/datadog-api-client-typescript/pull/2939)
* Add support for `Schema Processor` in `Logs Pipelines` [#2904](https://github.com/DataDog/datadog-api-client-typescript/pull/2904)
* Add new DeleteAssignee endpoint to Error Tracking APIs [#2894](https://github.com/DataDog/datadog-api-client-typescript/pull/2894)
* document agentless GCP scan options CRUD endpoints [#2886](https://github.com/DataDog/datadog-api-client-typescript/pull/2886)
* Document `/api/v2/roles/templates`  [#2865](https://github.com/DataDog/datadog-api-client-typescript/pull/2865)
* Add Reference Tables API spec [#2858](https://github.com/DataDog/datadog-api-client-typescript/pull/2858)
* Add blockedRequestPatterns to synthetics browser test options [#2848](https://github.com/DataDog/datadog-api-client-typescript/pull/2848)
* Add `BulkDeleteDatastoreItems` to Datastore API spec [#2846](https://github.com/DataDog/datadog-api-client-typescript/pull/2846)
* Add some missing Workload Protection agent rule fields [#2844](https://github.com/DataDog/datadog-api-client-typescript/pull/2844)
* Add conditional recipients to notification rule [#2832](https://github.com/DataDog/datadog-api-client-typescript/pull/2832)
* Update ci_app description with max 1 year event run duration restriction [#2762](https://github.com/DataDog/datadog-api-client-typescript/pull/2762)
* Document multiple case-management endpoints [#2637](https://github.com/DataDog/datadog-api-client-typescript/pull/2637)

### Changed
* Include mention to new scanned-assets-metadata endpoint on container images v1 endpoint [#2902](https://github.com/DataDog/datadog-api-client-typescript/pull/2902)
* Include mention to new scanned-assets-metadata endpoint on hosts v1 endpoint [#2900](https://github.com/DataDog/datadog-api-client-typescript/pull/2900)
* security_monitoring - Add indexes to deprecate index in ruleQuery [#2888](https://github.com/DataDog/datadog-api-client-typescript/pull/2888)
* Add support for vulnerability management - Add ListScannedAssetsMetadata new endpoint and update existing ones [#2884](https://github.com/DataDog/datadog-api-client-typescript/pull/2884)
* Update description, operationId and examples for tag pipeline and custom allocation rules [#2878](https://github.com/DataDog/datadog-api-client-typescript/pull/2878)

### Fixed
* Update the summary name for get a tag pipeline ruleset. [#2896](https://github.com/DataDog/datadog-api-client-typescript/pull/2896)

## 1.45.0/2025-10-01

### Security
* Update minimum required version of form-data [#2852](https://github.com/DataDog/datadog-api-client-typescript/pull/2852)

### Added
* Add AzureScanOptions to agentless scanning API [#2838](https://github.com/DataDog/datadog-api-client-typescript/pull/2838)
* Documenting the new Flaky Test Management API endpoint for public beta [#2788](https://github.com/DataDog/datadog-api-client-typescript/pull/2788)

## 1.44.0/2025-09-30

### Added
* Add API Key ID to rum application response [#2836](https://github.com/DataDog/datadog-api-client-typescript/pull/2836)
* Add suppression list query string parameter [#2834](https://github.com/DataDog/datadog-api-client-typescript/pull/2834)
* Add datastore trigger to workflows public API  [#2828](https://github.com/DataDog/datadog-api-client-typescript/pull/2828)
* Add Google PubSub destination to the Observability Pipelines API [#2810](https://github.com/DataDog/datadog-api-client-typescript/pull/2810)
* Add API spec for AWS Integrations standard and resource collection IAM permissions [#2805](https://github.com/DataDog/datadog-api-client-typescript/pull/2805)
* Publish new incident impact APIs [#2797](https://github.com/DataDog/datadog-api-client-typescript/pull/2797)
* Add product analytics to FormulaAndFunctionEventsDataSource [#2795](https://github.com/DataDog/datadog-api-client-typescript/pull/2795)
* Add sequence detection to security monitoring rules [#2790](https://github.com/DataDog/datadog-api-client-typescript/pull/2790)
* Add Public Delete Dora Events Endpoints [#2757](https://github.com/DataDog/datadog-api-client-typescript/pull/2757)

### Fixed
* Remove any references to synthetics test suites [#2818](https://github.com/DataDog/datadog-api-client-typescript/pull/2818)

### Changed
* Add tag pipeline, custom allocation rule and get cloud account by id for AWS/Azure/GCP configs APIs [#2786](https://github.com/DataDog/datadog-api-client-typescript/pull/2786)

## 1.43.0/2025-09-15

### Added
* Add Query Parameters to ListOrgConnections Endpoint [#2784](https://github.com/DataDog/datadog-api-client-typescript/pull/2784)
* Add Incident Notification Rules Public Spec [#2772](https://github.com/DataDog/datadog-api-client-typescript/pull/2772)
* Update v1 and v2 GCP API specs to support `monitored_resource_configs` [#2769](https://github.com/DataDog/datadog-api-client-typescript/pull/2769)
* Add action datastore API [#2731](https://github.com/DataDog/datadog-api-client-typescript/pull/2731)
* Security Monitoring - Make hasOptionalGroupByFields updatable [#2639](https://github.com/DataDog/datadog-api-client-typescript/pull/2639)

### Deprecated
* Promote unstable aws v2 APIs and deprecate v1 [#2767](https://github.com/DataDog/datadog-api-client-typescript/pull/2767)

### Changed
* Allow to send batches of events in pipelines API [#2737](https://github.com/DataDog/datadog-api-client-typescript/pull/2737)

## 1.42.0/2025-09-09

### Added
* Add Incident Notification Template Public Docs [#2760](https://github.com/DataDog/datadog-api-client-typescript/pull/2760)
* Add Cross Org API to Open API specs [#2759](https://github.com/DataDog/datadog-api-client-typescript/pull/2759)
* Update Get All Notification Rules API docs to include pagination, sorting, and filtering params [#2752](https://github.com/DataDog/datadog-api-client-typescript/pull/2752)
* Add readonly ID of synthetics test steps [#2748](https://github.com/DataDog/datadog-api-client-typescript/pull/2748)
* Create Cloud SIEM histsignals endpoints [#2746](https://github.com/DataDog/datadog-api-client-typescript/pull/2746)
* Security Monitoring - Validation Endpoint for Suppressions [#2741](https://github.com/DataDog/datadog-api-client-typescript/pull/2741)
* Security Monitoring - Related Suppressions for a Rule [#2734](https://github.com/DataDog/datadog-api-client-typescript/pull/2734)
* Extend Widget time schema with support for hide_incomplete_cost_data [#2708](https://github.com/DataDog/datadog-api-client-typescript/pull/2708)
* Add SDS rule `should_save_match` field [#2704](https://github.com/DataDog/datadog-api-client-typescript/pull/2704)
* Add spec for Agentless GetAwsScanOptions [#2697](https://github.com/DataDog/datadog-api-client-typescript/pull/2697)
* Add Cross Org API to Open API specs [#2693](https://github.com/DataDog/datadog-api-client-typescript/pull/2693)
* Add DNAP Spark Pod Autosizing service to API client [#2686](https://github.com/DataDog/datadog-api-client-typescript/pull/2686)
* Add version parameter to synthetic test trigger ci endpoint [#2684](https://github.com/DataDog/datadog-api-client-typescript/pull/2684)
* Document Error Tracking public APIs [#2680](https://github.com/DataDog/datadog-api-client-typescript/pull/2680)
* Add docs for 404 not found error in cost-onboarding-api [#2668](https://github.com/DataDog/datadog-api-client-typescript/pull/2668)
* Adds async Scorecard outcomes batch update endpoint [#2646](https://github.com/DataDog/datadog-api-client-typescript/pull/2646)

### Fixed
* Security Monitoring - Fix payload of Validation Endpoint for Suppressions [#2750](https://github.com/DataDog/datadog-api-client-typescript/pull/2750)
* [CCA-938][CCC-883] Audit existing CCM endpoints in OpenAPI spec [#2659](https://github.com/DataDog/datadog-api-client-typescript/pull/2659)
* Add enum Dataset type to Dataset API spec [#2655](https://github.com/DataDog/datadog-api-client-typescript/pull/2655)

### Changed
* Update public cost permissions [#2702](https://github.com/DataDog/datadog-api-client-typescript/pull/2702)
* Add Product Scales support to RUM v2 Applications API [#2664](https://github.com/DataDog/datadog-api-client-typescript/pull/2664)

## 1.41.0/2025-08-12

### Added
* Add Flex_Logs_Compute_XL to API Spec [#2619](https://github.com/DataDog/datadog-api-client-typescript/pull/2619)
* Support Host and IaC finding types in security notifications  [#2617](https://github.com/DataDog/datadog-api-client-typescript/pull/2617)
* New keys for summary public endpoint for Event Management Correlation product [#2609](https://github.com/DataDog/datadog-api-client-typescript/pull/2609)
* Add log autosubscription tag filters config to aws v2 API [#2601](https://github.com/DataDog/datadog-api-client-typescript/pull/2601)
* Extended List Findings API to expose resource related Private IP Addresses to details [#2586](https://github.com/DataDog/datadog-api-client-typescript/pull/2586)
* update metrics.yaml for ListMetricAssets and include Dashboard info [#2576](https://github.com/DataDog/datadog-api-client-typescript/pull/2576)
* Support Cloud SIEM scheduled rules in API client [#2568](https://github.com/DataDog/datadog-api-client-typescript/pull/2568)
* Uncomment edit dataset block, add dataset limitations into endpoint descriptions  [#2564](https://github.com/DataDog/datadog-api-client-typescript/pull/2564)
* Add `text` field in synthetics search endpoint [#2562](https://github.com/DataDog/datadog-api-client-typescript/pull/2562)
* Adding all action connection types to public API [#2560](https://github.com/DataDog/datadog-api-client-typescript/pull/2560)
* Document case management attributes endpoints [#2552](https://github.com/DataDog/datadog-api-client-typescript/pull/2552)
* add AP2 endpoint for On-Call Paging [#2543](https://github.com/DataDog/datadog-api-client-typescript/pull/2543)
* Flag IP case action [#2539](https://github.com/DataDog/datadog-api-client-typescript/pull/2539)
* Add DNS specs for Cloud Network Monitoring API [#2535](https://github.com/DataDog/datadog-api-client-typescript/pull/2535)
* Adding Datadog Connection to Connection API [#2522](https://github.com/DataDog/datadog-api-client-typescript/pull/2522)

### Fixed
* Split Dataset into separate request and response objects, mark unstable [#2584](https://github.com/DataDog/datadog-api-client-typescript/pull/2584)
* Disables some tests to avoid fails as the service is disabled [#2574](https://github.com/DataDog/datadog-api-client-typescript/pull/2574)
* OP make 'support_rules' field in parse_grok processor optional [#2546](https://github.com/DataDog/datadog-api-client-typescript/pull/2546)

### Deprecated
* Deprecate signals triage v1 endpoints [#2578](https://github.com/DataDog/datadog-api-client-typescript/pull/2578)

## 1.40.0/2025-07-14

### Added
* Add Datasets API to Open API Spec  [#2492](https://github.com/DataDog/datadog-api-client-typescript/pull/2492)
* Add support for vulnerability management - GetSBOMsList new endpoint and update existing ones [#2491](https://github.com/DataDog/datadog-api-client-typescript/pull/2491)
* Add spreadsheet to restriction_policy specs [#2478](https://github.com/DataDog/datadog-api-client-typescript/pull/2478)
* Adds missing /api/v1/synthetics/tests/search spec [#2463](https://github.com/DataDog/datadog-api-client-typescript/pull/2463)
* Add API spec for AWS Integrations IAM permissions [#2451](https://github.com/DataDog/datadog-api-client-typescript/pull/2451)
* New keys added for multiple products [#2448](https://github.com/DataDog/datadog-api-client-typescript/pull/2448)
* Add extractFromEmailBody step for synthetics browser test [#2442](https://github.com/DataDog/datadog-api-client-typescript/pull/2442)
* Add support for `Array Processor` in `Logs Pipelines` [#2438](https://github.com/DataDog/datadog-api-client-typescript/pull/2438)
* Document Cloud Cost Management GCP endpoints publicly [#2318](https://github.com/DataDog/datadog-api-client-typescript/pull/2318)

### Changed
* Update template variable schemas with type field in dashboards and shared dashboards endpoints for group by template variables [#2440](https://github.com/DataDog/datadog-api-client-typescript/pull/2440)

## 1.39.0/2025-06-30

### Fixed
* Synthetics mobile test `message` field is now required [#2436](https://github.com/DataDog/datadog-api-client-typescript/pull/2436)
* Make dns port be string and number [#2403](https://github.com/DataDog/datadog-api-client-typescript/pull/2403)

### Security
* Remove caseIndex from historical jobs api spec [#2434](https://github.com/DataDog/datadog-api-client-typescript/pull/2434)

### Changed
* Update events intake specs for v2 Events post endpoint [#2424](https://github.com/DataDog/datadog-api-client-typescript/pull/2424)

### Added
* Update Incident API specs to include `is_test` in `POST /incidents` and incidents response [#2422](https://github.com/DataDog/datadog-api-client-typescript/pull/2422)
* Add App Key Registration API  [#2411](https://github.com/DataDog/datadog-api-client-typescript/pull/2411)
* Add Monitor Template API [#2269](https://github.com/DataDog/datadog-api-client-typescript/pull/2269)

### Deprecated
* Deprecate SLO metadata fields in api spec [#2324](https://github.com/DataDog/datadog-api-client-typescript/pull/2324)

## 1.38.0/2025-06-24

### Fixed
* Fix basic auth requirements [#2397](https://github.com/DataDog/datadog-api-client-typescript/pull/2397)

### Added
* Microsoft Sentinel Public API support [#2392](https://github.com/DataDog/datadog-api-client-typescript/pull/2392)
* Add the AP2 datacenter. [#2384](https://github.com/DataDog/datadog-api-client-typescript/pull/2384)
* Add App Key Registration API [#2338](https://github.com/DataDog/datadog-api-client-typescript/pull/2338)

## 1.37.0/2025-06-23

### Fixed
* Fix basic auth requirements [#2397](https://github.com/DataDog/datadog-api-client-typescript/pull/2397)
* Add support for the api_security detection rule type [#2378](https://github.com/DataDog/datadog-api-client-typescript/pull/2378)

### Added
* Microsoft Sentinel Public API support [#2392](https://github.com/DataDog/datadog-api-client-typescript/pull/2392)
* Add custom fields to Rule update/validate API public documentation. [#2358](https://github.com/DataDog/datadog-api-client-typescript/pull/2358)
* Add hash field to actions in CWS agent rules [#2351](https://github.com/DataDog/datadog-api-client-typescript/pull/2351)
* Add App Key Registration API [#2338](https://github.com/DataDog/datadog-api-client-typescript/pull/2338)
* SDCD-1142: adding `custom_tags` optional attribute to DORA API spec [#2319](https://github.com/DataDog/datadog-api-client-typescript/pull/2319)
* Add sampling fields to SDS spec [#2312](https://github.com/DataDog/datadog-api-client-typescript/pull/2312)
* Add API spec for team hierarchy APIs [#2266](https://github.com/DataDog/datadog-api-client-typescript/pull/2266)

### Changed
* Update events intake specs for v2 Events post endpoint [#2341](https://github.com/DataDog/datadog-api-client-typescript/pull/2341)

## 1.36.0/2025-06-16

### Changed
* Add billing read permission [#2335](https://github.com/DataDog/datadog-api-client-typescript/pull/2335)
* Update DORA endpoints [#2279](https://github.com/DataDog/datadog-api-client-typescript/pull/2279)

### Added
* Add `form` field for `multipart/form-data` HTTP API tests [#2320](https://github.com/DataDog/datadog-api-client-typescript/pull/2320)
* Add new endpoint to upsert/list/delete custom kinds [#2311](https://github.com/DataDog/datadog-api-client-typescript/pull/2311)
* Add spec for team on-call endpoint [#2308](https://github.com/DataDog/datadog-api-client-typescript/pull/2308)
* Add support for all subtypes in multistep steps [#2259](https://github.com/DataDog/datadog-api-client-typescript/pull/2259)
* Added new optional field definition to include more detail in findings for '/api/v2/posture_management/findings'  [#2245](https://github.com/DataDog/datadog-api-client-typescript/pull/2245)
* Exposing set action on Terraform V2 [#2244](https://github.com/DataDog/datadog-api-client-typescript/pull/2244)
* Add monitor draft status field [#2243](https://github.com/DataDog/datadog-api-client-typescript/pull/2243)
* Add rum application to restriction policy [#2105](https://github.com/DataDog/datadog-api-client-typescript/pull/2105)

### Fixed
* Fix tags with special characters [#2315](https://github.com/DataDog/datadog-api-client-typescript/pull/2315)

## 1.35.0/2025-05-28

### Fixed
* add `include` parameter to On-Call team rules test [#2270](https://github.com/DataDog/datadog-api-client-typescript/pull/2270)
* fix On-Call spec [#2262](https://github.com/DataDog/datadog-api-client-typescript/pull/2262)
* Fix incorrect pattern for url [#2223](https://github.com/DataDog/datadog-api-client-typescript/pull/2223)

### Added
* Add support for Datadog Events as a data source for rules [#2267](https://github.com/DataDog/datadog-api-client-typescript/pull/2267)
* Add public APIs to search DORA events [#2263](https://github.com/DataDog/datadog-api-client-typescript/pull/2263)
* Adding endpoints to manage Resource Evaluation Filters [#2236](https://github.com/DataDog/datadog-api-client-typescript/pull/2236)
* Add Sev0 as a supported incident severity [#2225](https://github.com/DataDog/datadog-api-client-typescript/pull/2225)
* Share timerestriction object [#2222](https://github.com/DataDog/datadog-api-client-typescript/pull/2222)
* add On-Call Paging spec [#2216](https://github.com/DataDog/datadog-api-client-typescript/pull/2216)

## 1.34.1 / 2025-04-14

### Fixed
* Change `type` to enum to discriminate included items in the response of `ListCatalogEntity` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2111
* Deprecate options from logs aggregate API public spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2120
* change a category in enum for datadog_appsec_waf_custom_rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2113
### Added
* Add datasource to job definition for security monitoring  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2106
* Include new rum types in Usage_metering Yaml by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2109
* Adding new UT apm_error_events keys in summary endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2103
* Add more triggers for workflow automation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2114
* Add specs for Cloud Network Monitoring API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2124
* Add more Security Monitoring Data Source enum values by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2119
* Add componentOf field to Service, Queue, and Datastore V3 Software Catalog definitions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2122
* Add 'mute_buttons' argument to slack channel definition by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2126
* Add Observability Pipelines API  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2125
* add rum slo bugfix by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2138
* Add trace_rate support to APM retention filter APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2143
* Update NDM GetInterfaces documentation to add ip_addresses attribute by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2142
* Add assertRequests browser step type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2147
* Add user behavior case actions in API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2146
### Changed
* Remove OpenAPI enum enforcement of Service Definition v2dot2 type field from service definition endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2107
* Add on-call schedules endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2129


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.33.1...v1.34.1

## 1.33.1 / 2025-03-11

### Changed
* Remove meta from RUM retention filters APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2098


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.33.0...v1.33.1

## 1.33.0 / 2025-03-11

### Fixed
* Remove `javascript` browser variable type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2043
* Additional rules to inject openapi type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2063
* Fix `ListCatalogEntity` pagination endpoint to use correct offset value by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2082
* [generator] fix import references by @nizox in https://github.com/DataDog/datadog-api-client-typescript/pull/2081
### Added
* add new related_assets filter query parameter to the get a list of metrics V2 API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2009
* Add actions and groupSignalsBy field in detection rules API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2045
* Add Workflows CRUD Public API Endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2035
* Add endpoint to retrieve Security Monitoring rule version history by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2015
* Adds override_existing_configurations and include_actively_queried_configurations to bulk tag config endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2054
* Add `number_format` to each formula in widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2056
* Add `trend` support for `cell_display_mode` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2053
* Add support for span id remapper in logs pipelines processors by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2064
* Add evaluation_window and keep_alive for Security monitoring rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2065
* Add `extractedValuesFromScript` to multistep API tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2069
* Update timezone for cumulative window by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2068
* Document Agentless AWS scan options routes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2077
* Create types for app builder queries explicitly, remove experimental flag by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2047
* Document Agentless AWS on demand routes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2083
* Add quality_issues to monitor schema on monitor search API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2085
* Introduce public v2 endpoints for Application Security by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2070
* Add delete log index to public API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2084
* Add v2 endpoints for RUM retention filters. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2079
* Added storage class information to the S3 archive destination by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2091
### Changed
* Revert GetSBOM to `x-unstable` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2048
* Update documentation with account filtering info for aws_cur_config endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2059
* Update sharing APIs to match server by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2067
* Update Vulnerabilities endpoints documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2071
### Deprecated
* Deprecate API management endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2058

## New Contributors
* @nizox made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/2081

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.32.0...v1.33.0

## 1.32.0 / 2025-02-05

### Fixed
* Refactor fetch handling to avoid illegal invocation errors by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/1990
* Modify owner properties to be a string by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2036
### Added
* Add UT breakdown for fargate_container_profiler billing dimension by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1964
* Add synthetics browser step public_id field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1837
* Add support for vulnerability management  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1965
* add start_date to suppression APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1929
* Add CSM Coverage Analysis API specs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1970
* Add allow_self_lockout to documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1979
* Ephemeral Infra_host new keys in summary endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1981
* Update app builder API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1974
* Add meta and source fields to JSONAPIErrorItem by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1973
* Add CSM Agentless Read Endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1971
* Update rum doc to include new usage types by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1984
* add cost monitor type to API Spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1996
* Add Action Connection API for Workflow Automation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1982
* Add `type` in Data Deletion API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2001
* Add a cost monitor example by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2007
* Add `provider_name` attribute to pipelines API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1986
* Add support for vulnerability management - GetSBOM new endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2006
* Remove preview status for GetBillingDimensionMapping endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2014
* Add encryption field to logs archive destination by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2012
* Add tags and description to logs pipelines by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2018
* Publish security notification rules API endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2010
* Publish app builder API documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1988
* update public document with configuration event type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2026
* Add support for Entity kind API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2031
* Rename `embeddedQueries` attribute to `queries` in app builder api by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2032
### Changed
* Fix specification for Azure metric filtering by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1968
* Change allow_self_lockout from string to bool by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1983
* remove flag Beta for cost-by-tag endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2023
* Added Support for Workflow Webhooks Public API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2027
* Vulnerabilities endpoints GA - Remove `x-unstable` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/2033


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.31.0...v1.32.0

## 1.31.0 / 2024-12-17

### Added
* Adds accepted reasons for archiving signal by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1817
* Add usage type breakdown for error tracking billing dimension by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1897
* Add Historical Job endpoints to Datadog API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1896
* Add new keys for CWS Fargate Task in summary usage and usage attribution endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1901
* Add missing measures for SLOs data source by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1902
* Create AWS Integrations v2 API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1642
* Add step_functions as valid enum for v1 AWS tag filter spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1908
* Fix authz scope descriptions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1919
* Updated OpenAPI logs_pattern_query to support Patterns for any attribute by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1918
* Add API specification for events intake v2 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1860
* Data Deletion Endpoints Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1904
* Add `exitIfSucceed` to multistep API tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1947
* Security Monitoring Rule - Add the updatedAt field in the SecurityMonitoringStandardRuleResponse by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1921
* add docs for pagination in /api/v2/metrics endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1829
* Add daily as a valid enum for SLOReportInterval by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1957
* Add new product Code Security host for summary endpoint and UA endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1923
* Add CSM Agents Read Endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1955
* Add app builder API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1949
### Changed
* Fix spelling error for bindings by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1898
* Revert the earlier spelling change by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1903
* Remove mobile device ids and make all device ids simple string by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1914
* Remove support for `namespace_filters.include/exclude_all` in v2 AWS Integrations API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1917
* Add running pipelines on custom pipelines API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1911
### Removed
* Remove unnecessary field in list stream column config by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1958
### Deprecated
* Remove `/api/v2/cost/enabled` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1943

## New Contributors
* @bthuilot made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1952

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.30.0...v1.31.0

## 1.30.0 / 2024-11-07

### Fixed
* Fix Toplist widget's stacked display style - remove legend as required field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1838
* Remove user fields that are unsupported by the Incidents API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1850
* Fix Synthetics batch status by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1891
### Added
* Add MSTeams integration metadata info by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1852
* Add `code_analysis_sa_committers_hwm` and `code_analysis_sca_committers_hwm` to UsageMetering by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1853
* Update GCP API Spec to support `is_resource_change_collection_enabled` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1856
* Add vulnerability type to Findings API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1855
* Update Documentation for Data Stream Monitoring by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1862
* Add LLM Observability to ListStreamSource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1861
* Add synthetics stepDetail.allowFailure and stepDetail.failure by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1871
* Integrate incident types into Incidents API documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1854
* Add `use_recommended_keywords` attribute to sensitive data scanner rule spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1881
* Add domain allowlist endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1878
* Add v2 endpoints for RUM custom metrics. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1877
* Documentation for beta /v2/usage/billing_dimension_mapping by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1806
* Add `alwaysExecute` and `exitIfSucceed` to Synthetics steps by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1892
* Add metric_namespace_configs to GCP v2 API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1894
### Changed
* Edit Naming for v2 Microsoft Teams Integration Endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1851
* Change the mobile device ids from enum to string by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1849
* Mark Cost Attribution end_month parameter as not required by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1834
* Allow for any type for additionalProperties in HTTPLogItem by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1870
* Make some amendments to the new mobiles schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1869
* Make value be oneOf number or string by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1882
* Add examples for resources for Cloudflare by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1876
### Removed
* Remove deprecated estimated usage types for usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1874
### Deprecated
* Deprecate two sds metadata fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1868
* Delete `api/v2/cost/aws_related_accounts` from spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1883
* Deprecate `api/v2/cost/enabled` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1885


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.29.0...v1.30.0

## 1.29.0 / 2024-10-02

### Fixed
* change schema used in FastlyServicesResponse by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1828
### Added
* Add new synthetics HTTP javascript assertion by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1744
* Dashboards - Toplist widget style - Add palette by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1802
* Allow Table Widget requests to specify text replace formatting in dashboards by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1803
* Add documentation for Data Jobs Monitoring summary keys by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1808
* Update estimate docs with realtime changes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1832
* Ensure clients can handle empty oneOf objects by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1830
* Add referenceTables field to security monitoring endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1825
* Add UA documentation for new DJM usage_type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1826
* Add v2 endpoints for MS Teams Integration by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1835
* Add schema for mobile test by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1818
* Add Synthetics endpoint to fetch uptimes in API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1792
### Changed
* Split the synthetics request port field into a oneOf by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1811
* Remove unused field `color` in `TeamUpdateAttributes` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1809
* Powerpack add support for prefix and available values by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1819
* Update v2 metrics list endpoint filter by metric type to use metric type category by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1833
### Security
* Bump micromatch from 4.0.5 to 4.0.8 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/1795
* Bump express from 4.18.2 to 4.21.0 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/1815

## New Contributors
* @segevfiner made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1786

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.28.0...v1.29.0

## 1.28.0 / 2024-09-04

### Fixed
* Handle `additionalProperties` set to false by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/1763
* Add `is_totp` and `is_fido` to Synthetic global variables by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1728
### Added
* Add `api_key` and `name` to `CloudflareAccountResponseAttributes`. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1758
* Add `api_key` and `name` to `FastlyAccountUpdateRequestAttributes`. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1759
* Add `opsgenie_api_key` to `OpsgenieServiceResponseAttributes`. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1760
* Add `category` and `remote_config_read_enabled` to `APIKeyCreateAttributes`, and add `LeakedKey`. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1761
* Allow 4 group-bys for pattern viz by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1768
* add url attribute to metrics assets v2 api by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1770
* Add editable field to suppression rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1673
* Add `num_flex_logs_retention_days` field to logs_indexes api spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1771
* Software catalog openapi spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1778
### Changed
* allow variables in port by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1753
* Fix VFTs and extracted local variables enum types by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1731
* Changed Widget time schema to add support for new fixed_span and live_span object by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1749
### Deprecated
* mark groupby_simple_monitor as deprecated by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1789


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.27.0...v1.28.0

## 1.27.0 / 2024-08-12

### Fixed
* fix monitor enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1698
* dashboards add support for time-slice SLOs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1699
* Make modified by field nullable for get all API keys by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1704
* Add `409 Conflict` to `CreateGlobalVariable` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1712
### Added
* Add network performance monitor type to API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1674
* Document `force_delete_dependencies` for synthetics test deletion by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1668
* Support metric filtering in integration azure GET, PUT APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1680
* add enableProfiling and enableSecurityTesting options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1690
* Add convert rule JSON to terraform to Datadog API Spec. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1665
* add changes for datadog partner program to estimated cost and billable usage APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1670
* Add type as a required field for the different basic auth types by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1682
* Adding Network Device Monitoring API Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1676
* Security Monitoring - Support anomaly threshold detection method by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1695
* update hourly usage API docs for partner program by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1706
* Add resource_type query param to authn mapping spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1641
* Add rum stream to API definition by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1713
* Support `incident_analytics` enum in dashboard widget `FormulaAndFunctionEventsDataSource` data sources by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1719
* update usage summary API docs for partner program by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1717
* update historical_cost and projected_cost for partner program by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1708
* Add custom cost endpoints to public API documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1720
* Update documentation for Cloud SIEM Analyzed Logs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1722
* Update documentation for App Sec SCA by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1710
* Add trigger API documentation for workflow automation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1687
* Add PUT endpoint to scorecards APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1732
* Documentation for new device tags endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1724
* Update documentation for Flex Logs Starter by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1742
### Changed
* add mfa_enabled field and change created_at type to datetime by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1743
### Deprecated
* Deprecate `ListAWSRelatedAccounts` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1711

## New Contributors
* @jack-edmonds-dd made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1684
* @amaskara-dd made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1703

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.26.0...v1.27.0

## 1.26.0 / 2024-07-01

### Fixed
* Security Monitoring - Define specific payload for rule validation/testing by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1639
* Remove the maximum limitation for the synthetics renotify_interval monitor option by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1643
* Add bodyHash as a synthetics assertion type. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1644
* Add missing attributes envelope in ListAPIs response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1654
### Added
* Allow the usage of the filters field when creating an agent rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1619
* Add tileDef sort attribute by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1621
* Add Security Monitoring rule test endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1634
* Add originalFileName field to the SyntheticsTestRequestBodyFile definition by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1640
* Add support for API management ListAPIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1648
* Add elementsOperator to json path assertion for synthetic HTTP tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1660
* Add /api/v2/org_configs specs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1659
* Update docs for RU Rollout New and Deprecated Keys planned for Oct 1st by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1672
* Allow custom `fetch` function to be provided by @iammminzzy in https://github.com/DataDog/datadog-api-client-typescript/pull/1646
* Add option for wait step in multistep api tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1671
* add cross org uuids to timeseries query by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1664
### Changed
* Monitor priority can have custom ranges and be null by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1669

## New Contributors
* @iammminzzy made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1646

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.25.0...v1.26.0

## 1.25.0 / 2024-05-21

### Fixed
* fix case search documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1598
### Added
* Add support variablesFromScript in Synthetics API test by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1600
* Add JSONSchema assertion support to API and multistep tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1576
* add 1 day logs to usage api docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1604
* Update UserTeamIncluded to include teams by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1609
* Security Monitoring - Make Default Tags available in the response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1618
* Add flex logs storage tier by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1620
### [**Breaking**] Changed
* Rename the Cloud Workload Security tag to CSM Threats by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1608


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.24.0...v1.25.0

## 1.24.0 / 2024-04-11

### Fixed
* Update Cleanup script to use GCP STS endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1556
* Add include data to get team memberships response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1542
### Added
* Add `ci-pipeline-fingerprints` field in v2.2 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1562
* Add validation endpoint for Security Monitoring Rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1581
* Add UA documentation for online_archive and incident_management by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1585
* Mark `unit` as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1587
* Add query_interval_seconds to time-slice SLO condition parameters by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1589
* Support providing files for the file upload feature when creating a Synthetic API test by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1588
* Adding SLO Reporting API Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1558
* Security Monitoring Suppression - Add data_exclusion_query field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1593
* aws api adding extended and deprecating old resource collection field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1591
### Changed
* Add Team relationship to AuthNMappings by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1517
### Deprecated
* Remove deprecated /api/v1/usage/attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1571
* Deprecate legacy hourly usage metering endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1567

## New Contributors
* @tim-chaplin-dd made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1578

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.23.0...v1.24.0

## 1.23.0 / 2024-03-13

### Fixed
* Downgrade noisy deserialization error log to debug by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/1515
* Move under common tag Case Management by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1520
* Include user data with team membership resource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1516
* Apply static analysis changes by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/1488
* Disable additionalProperties for Downtime Schedule UpdateRequest oneOfs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1525
* Fix ListServiceDefinitions pagination information by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1550
### Added
* Case Management Public API documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1499
* Make grpc steps available for synthetics api multisteps tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1519
* Add cloud run filter to GCP v1 and v2 spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1496
* add ASM serverless to usage metering API docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1529
* Add new products to usage API docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1534
* Implement additionalProperties on all models by default by @nkzou in https://github.com/DataDog/datadog-api-client-typescript/pull/1532
* Adds support for `ListMetricAssets` endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1531
* Add support for new CRUD agent rules endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1545
* Add documentation for workflow usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1551
* Add Custom Destinations Public API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1555
### Changed
* Update spec for DORA Metrics Incident endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1518
### Deprecated
* Deprecate the pattern property for SDS Standard Pattern Attributes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1546
* Deprecate Incident Services endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1557

## New Contributors
* @antonio-ramadas-dd made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1554

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.22.0...v1.23.0

## 1.22.0 / 2024-02-06

### Fixed
* Add test support for file parameters by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1491
* Security Monitoring Suppressions - Make expiration date nullable in update payload by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1500
### Added
* Security Monitoring - Add API support for suppression rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1484
* Document support for BYDAY in SLO corrections by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1492
* Add missing optional field env in DORA API endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1493
* Add compressedProtoFile field to SyntheticsTestRequest by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1490
* Add daily limit reset options to logs indexes api by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1494
* Add support for API management API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1489
* Add pagination helper for team memberships by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1502
* Increase limit on allowed number of graphs in split graph widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1507
### Deprecated
* Mark dashboard 'is_read_only' and 'restricted_roles' properties as deprecated by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1476


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.21.0...v1.22.0

## 1.21.0 / 2024-01-10

### Fixed
* Bump get-func-name from 2.0.0 to 2.0.2 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/1351
* Bump @babel/traverse from 7.22.5 to 7.23.2 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/1379
### Added
* Add priority field to SDS rule and standard-pattern by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1452
* Document new `resource_collection` and `is_security_command_center_enabled` fields in GCP APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1453
* Add SAML attributes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1445
* Security Monitoring - Support custom third party rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1470
* Add public API support for time-slice SLOs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1462
* Add included_keyword_configuration field to SDS rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1473
* Update Documentation for APM DevSecOps by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1474
### Changed
* Mark v1 downtime endpoints as deprecated by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1467
* Adding Cloud Cost Management API Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1336
* Add support for Cloudflare API `zone` and `resource` fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1472


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.20.0...v1.21.0

## 1.20.0 / 2023-12-12

### Fixed
* Fix Powerpack schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1402
### Added
* Add support for projected-cost endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1386
* Document missing incident fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1406
* Add active billing dimensions to usage metering by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1425
* Add Cost Attribution To Usage Metering Public Beta Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1410
* Update spec to include new DORA API endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1424
* Add support to patch Synthetics test with partial data using JSON Patch by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1418
* Document new api/app key schemas by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1405
* Document new field `filters` for `CloudWorkloadSecurityAgentRule` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1426
* Live and historical custom timeseries docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1416
* Add week_to_date and month_to_date to widget livespan by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1419
* Document `included_keywords` in `ListStandardPatterns` response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1429
* Document fields `remote_config_read_enabled` and `category` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1427
* Update Azure Spec to include Resource Collection by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1434
* Allow creation of Application Security detection rules from the v2 API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1436
* Add Okta Integration APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1417
* Remove unstable flag for Events v2 api by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1441


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.19.0...v1.20.0

## 1.19.0 / 2023-11-15

### Fixed
* Remove notify_no_data default by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1383
* Fix SecurityMonitoringSignalAttribute field name by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1391
* Fix typo in service definition field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1404
### Added
* Update documentation for Cloud SIEM by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1374
* Add containers API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1375
* Add serverless apm to usage attribution api by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1381
* Document missing parameters by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1339
* Powerpack Live Span Support by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1389
* Add Amazon EventBridge endpoints to AWS Integration API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1376
* Add Container App filters to Azure API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1359
* Add UUID format support  by @HantingZhang2 in https://github.com/DataDog/datadog-api-client-typescript/pull/1388
* Add new UA products to usage metering docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1393
* Add scorecards endpoints  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1398
* Document top list widget style by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1384
* Add optional group-bys support to security signals by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1399
### Changed
* Add Beta Banner to Send Pipeline Events Endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1390
* Remove endpoint for mute or unmute a finding and add support for bulk mute findings endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1385


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.18.0...v1.19.0

## 1.18.0 / 2023-10-16

### Fixed
* Fix schema for query scalar API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1328
* Remove the application key from CreateCIAppPipelineEvent endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1338
* Document 403 on team endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1347
* Powerpack improve group_widget object by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1360
* Remove escalation message default by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1372
### Added
* Add split graph widget to dashboard schema  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1304
* Update public docs for CSM Enterprise and CSPM by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1325
* Add serverless apps to usage and usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1344
* Add Network Device Monitoring Netflow to usage by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1354
* Add Powerpacks endpoints to public api spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1326
* Add account-tags to GCP Service Account Attributes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1337
* Add powerpack widget to dashboard schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1355
* Add custom schedule to monitor scheduling options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1340
* Service Catalog support service definition schema v2.2 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1364
* Powerpack pagination and test fixes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1368
* Add support for container images endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1366
* Add global IP ranges to spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1034
### Changed
* Add APM retention filter api documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1313
* Update request requirements of CI Visibility public pipelines write API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1349
* Add get APM retention filter endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1352
* Remove beta label notice on create pipeline API endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1367


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.17.0...v1.18.0

## 1.17.0 / 2023-09-14

### Fixed
* Fix downtimes monitor relationship id schema type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1309
* Fix passing body in retry logic by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/1321
### Added
* Add trace_stream to dashboard ListStreamSource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1282
* Add pagination extension to SLO corrections by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1294
* Adding aas count to the documentation for summary and hourly usage endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1297
* Add pagination extension to SLOs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1295
* Add pagination extension to monitors by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1296
* Add pagination extension to synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1301
* Add 'style' to sunburst requests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1300
* Add pagination extension to notebook by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1302
* Add support for dashboard listing pagination parameters by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1306
* Add pagination parameters to downtimes listing by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1308
* Add pagination extension to user list by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1307
* Add pagination extension to team listing by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1310
* Add retry support by @HantingZhang2 in https://github.com/DataDog/datadog-api-client-typescript/pull/1293
* Remove private beta for Downtimes v2 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1305
* Update v1 monitor api docs to exclude downtimes v2 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1318
* Add timing scope for response time assertions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1311
* Add Formula and Function query support to heatmap widgets by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1319
* Add synthetics mobile application testing to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1315

## New Contributors
* @HantingZhang2 made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/1293

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.16.0...v1.17.0

## 1.16.0 / 2023-08-23

### Fixed
* Update team schemas by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1249
* Mark downtime v2 start response as required by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1260
* Document new properties and fix security monitoring schemas by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1248
* Add missing CI App fields `page` and `test_level` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1225
### Added
* Update stated limit for api/v2/metrics from 14 days to 30 days by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1255
* Add missing sensitive data scanner fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1246
* Add Workflow Executions to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1257
* Add missing `type` field for OnDemandConcurrencyCap response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1247
* Add CI Visibility Intelligent Test Runner to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1256
* Add custom_links to distribution widget schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1263
* Add usage field `region` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1264
* Add `message` field to audit logs response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1266
* Add `tags` field to dashboard list response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1265
* API specs for user team memberships by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1277
* Document `EQUAL` comparator by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1280
* Add persistCookies option synthetics test request by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1279
* Expose sds_scanned_bytes_usage in usage attribution API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1285
* Add support in azure integration endpoint for app service plan filters/cspm/custom metrics by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1278
* Add APM and USM usage attribution type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1273
* Document new attributes for team models by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1270
### Changed
* Use configuration method for server variables by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/1284


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.15.0...v1.16.0

## 1.15.0 / 2023-07-20

### Fixed
* Spans API docs update by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1218
* Fix filter indexes parameter in logs search by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1222
* Fix Spans endpoint schemas by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1241
### Added
* Add support for geomap widget using response_type `event_list` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1202
* Add support for the spans API endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1207
* Add a new field additional_query_filters to formula and function slo query by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1219
* Add support for `enable_custom_metrics` in Confluent Account by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1216
* Add missing `id` attribute for Confluent Account Response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1223
* Fix downtimes v2 schema and add missing field `canceled` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1228
* Add cloud_cost data source and query definition to dashboards by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1230
* Add missing cloud workload security fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1236
* Add `integration_id` field for dashboard list item by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1240
* Add events response fields `message` and `status` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1237
* Add missing `GetRUMApplications` response field `id` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1238
* Add missing service definition fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1239
* Add overlay type to Dashboards WidgetDisplayType by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1242
* Update IP ranges with remote configuration section by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1244
* Add missing `relationships` to UsersInvitations response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1245
* Added optional field filters when creating a cloud configuration rule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1250
### Changed
* Add downtime v2 API in private beta by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1159
* Mark `access_role` as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1226
### Security
* Bump semver from 6.3.0 to 6.3.1 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/1232


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.14.0...v1.15.0

## 1.14.0 / 2023-06-27

### Fixed
* Mark `restricted_roles` as nullable in monitor update request by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1175
* Mark additional usage fields as `nullable` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1183
* Updated findings api error responses by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1164
* Mark usage metering field `lines_indexed` as `nullable` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1188
* Update dashboard widget axis field descriptions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1174
* Fix `CreateGCPSTSAccount` return code and update tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1194
* Fix `CreateGCPSTSAccount` response status code by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1198
* Add missing descriptions for authorization scopes in public docs  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1196
* Fix dateToRFC3339String parsing by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/1201
* Fix datetime handling more broadly by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/1203
* Update CI Visibility pipelines write API endpoint fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1204
### Added
* Add support for mute findings endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1148
* Expose `database-monitoring` monitor type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1040
* Add endpoint to get Synthetics default locations by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1182
* Add usage metering RUM Roku fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1189
* Add usage metering fields for AWS and Azure cloud cost management by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1191
* Add support for CI Visibility create pipeline events endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1190
* Add isUndefined synthetics assertion operator by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1193
* Add missing Synthetics and Metrics Scope descriptions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1197
### Changed
* Team name and handle length updates by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1171
### Deprecated
* mark v1 GCP APIs as deprecated by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1185


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.13.0...v1.14.0

## 1.13.0 / 2023-05-31

### Fixed
* Mark usage fields as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1116
* Properly mark usage fields as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1132
* Remove read only attributes from team create and update by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1136
### Added
* Expose `include_breakdown` param for v2 hourly_usage by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1109
* Add support for deserializing `additionalProperties` in GO client by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1101
* Add new grpc assertions for Synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1114
* add additional_query_filters to slo widget  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1125
* Add `customer_impact_scope` to fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1123
* Add notify_end_states and notify_end_types options to downtime by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1127
* Add snapshot timestamp to GetFinding by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1138
* Support schema version parameter in Get and List Service Definition endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1140
* Add Application Vulnerability Management to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1141
* Add formula and function slo query to dash widgets by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1145
* Add secure field to Synthetics Browser Test variables and update docs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1144
* Add MatchingDowntime to monitor schema and with_downtimes parameter to GetMonitor by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1152
* Add auth scopes for the `service_definition` endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1156
* Update documentation for observability pipeline bytes usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1149
* Add option to obfuscate extracted values from Synthetics multistep tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1150
* Add support for GCP STS endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1143
* Add `sort` field to List Stream Widget's request query by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1167
### Changed
* Update spec to change findings limit and security monitoring menu order by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1111
* Require teams_manage scope for creating and deleting teams by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1126
* Update team name and handle length restrictions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1168
### Deprecated
* Deprecate note for Incident Teams endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1131


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.12.0...v1.13.0

## 1.12.0 / 2023-04-18

### Fixed
* Fix application_security_host_top99p usage field by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1069
* Mark `resource_type` attribute as required for Confluent Account by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1083
* Fix spec errors caught with prism validation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1097
* Fix spans/logs custom metrics delete operation responses by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1103
### Added
* Add support for Incident Todo APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1057
* Add supported relations in restriction policy  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1065
* Add parameter to downtime API for returning creator info by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1068
* Publish the new ingested timeseries metrics for usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1053
* Add tags field to dashboard API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1062
* Add pagination support to SearchIncidents by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1075
* Add service catalog v2.1 schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1072
* Add team API specs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1070
* Add spans metrics API endpoints specification by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1076
* Add universal service monitoring to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1079
* Add a new contact type in service catalog api for schema v2 and v2.1 by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1082
* Add pagination support for the GET service_definitions endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1087
* Publish logs forwarding fields in summary usage API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1085
* Add compressedJsonDescriptor to Synthetics gRPC tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1084
* Add region field and note about multiregion start by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1071
* Add AP1 support by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1093
* Add support for shared dashboards endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1080
### Deprecated
* Deprecate audit logs usage by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1095


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.11.0...v1.12.0

## 1.11.0 / 2023-03-14

### Added
* Add restriction policy APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1024
* Support RUM data source in Query API and fix aggregators by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1029
* Add endpoint to get and set on demand concurrency cap for Synthetics by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1025
* Publish IP allowlist APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1012
* Expose Flutter fields to rum product in the meter usage API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1036
* Add profiled fargate tasks to usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1041
* Add cipipeline stream to ListStreamSource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1000
* Add application_security to security monitoring rule type enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1039
* Add `ci_pipelines` enum to `FormulaAndFunctionEventsDataSource` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1051
* Add citest stream to ListStreamSource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1045
* Add `logs_issue_stream` enum to `ListStreamSource` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1052
* Add support for Incident Integration Metadata APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1042
* Add SLO to GRACE API spec by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1060
* Add audit trail to usage metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1059


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.10.0...v1.11.0

## 1.10.0 / 2023-02-15

### Fixed
* More resilient `date-time` deserialization by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/1009
* Set hosts versions as `type any` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1022
### Added
* Add orchestrator section in IP ranges by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1013
* Add Cloud Cost Management fields to Usage Metering endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1019
* Add cloud-cost as a supported query data source by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1007
* Add Cloud Cost And Container Excl Agent Usage Fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1023
* Add SLO status and error budget remaining to search API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1028
* Add `sort` field to SLOListWidgetQuery by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1026


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.9.0...v1.10.0

## 1.9.0 / 2023-02-08

### Fixed
* Mark timeseries values as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/976
* Add namespaces attribute and rename excluded_attributes in SDS Public API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/988
* Set macV as `type any` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1003
### Added
* Add httpVersion option to Synthetics API tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/981
* Add deprecationDate to security monitoring rule response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/982
* Add new group by configuration to list stream widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/978
* Add synthetics advanced scheduling by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/965
* Add notification preset enum field to monitor options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/985
* Add support for Cloudflare integration API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/984
* Add support for Fastly account API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/907
* Add monitor configuration policies by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/987
* Support is_cspm_enabled field in GCP integrations by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/996
* Add run workflow widget to dashboard schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/990
* Add new missing enum values for `aggregation` and `detectionMethod` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1005
* Add region to estimated cost and historical cost response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1006
* Add Usage Metering container_excl_agent_usage fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1008
* Add event_stream fields to dashboard list stream widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/1011
### Changed
* Move Service account create from users to service accounts by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/994


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.8.0...v1.9.0

## 1.8.0 / 2023-01-11

### Fixed
* Remove incorrect required fields from CloudConfigurationComplianceRuleOptions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/958
* Update CI Visibility types of BucketResponse schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/960
* Fix logs aggregate integer facets by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/968
### Added
* Add support for query scalar and timeseries endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/955
* Add estimated rum sessions usage types to UA enums by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/950
* Update API spec to allow primary timeframe, target, and warning by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/963
* Add Usage Metering Cont Usage fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/964
* Add secure field to synthetics config variables by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/966
* Add Support for Incident Management Search API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/927
* Add TOTP parameters to Synthetics test options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/971
### Changed
* Remove indexed logs from Usage Attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/970
* Remove pagination parameter from CI visibility aggregate endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/975


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.7.0...v1.8.0

## 1.7.0 / 2022-12-20

### Fixed
* Add missing response fields to MTD usage attribution endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/935
* Reduce and relax `isNode` check by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/938
* Fix missing field in Synthetics tests authentication configuration by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/940
* Validate BDD models in tests by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/904
* Mark `hosts` response version fields as nullable by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/937
### Added
* Add fields for CSPM GCP usage by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/911
* Add offset and limit parameter to SLO correction API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/916
* Add documentation for Logs Pipelines ReferenceTableLogsLookupProcessor  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/915
* Adding new field for the usage metering infra hosts by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/919
* Add `include_percentiles` field in Logs Custom Metrics by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/896
* Add OAuth support for Synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/923
* Add new billable summary fields by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/932
* RUM Applications Management API add client_token by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/918
* Support GRPC unary calls in Synthetics by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/930
* Add style object to dashboard widget formulas by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/945
* Add enable_samples monitor option by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/948
* Update security_monitoring endpoints for cloud_configuration rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/949
* Add support for sensitive data scanner APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/942
* Add synthetics_parallel_testing to Usage Metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/951
* Synthetics add pagination params to get all tests endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/952
### Changed
* Bump `typescript` to latest by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/905


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.6.0...v1.7.0

## 1.6.0 / 2022-11-16

### Fixed
* Remove node specific checks and unblock running in workers by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/899
* Fallback on `cross-fetch` only when `fetch` is not available by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/900
* Fix service catalog schema change by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/906
### Added
* Add support for CI Visibility API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/880
* Add support for querying logs in Online Archives by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/871
* Add new SDS fields to usage API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/881
* Remove Beta status for SLO history endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/883
* Update formula and function monitor enum datasource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/889
* Add scheduling_options to monitor definition by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/890
* Appsec Fargate Public Documentation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/893
* Adds noScreenshot to SyntheticsStep by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/895
* Add support for xpath assertions in synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/876
* Add bodyType to Synthetics request by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/901
### Changed
* Target es6 javascript by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/887


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.5.0...v1.6.0

## 1.5.0 / 2022-10-24

### Fixed
* Add Default Rule ID in SignalRuleResponseQuery by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/868
* Remove incident's resolved attribute from update requests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/869
* Fix event monitor created_at by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/870
* Fix error handling in APIs by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/875
* Fix spectral rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/873
### Added
* Add notify_by monitor option by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/862
* Add support for service definitions APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/874
* Add support for confluent cloud integration by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/813
### Deprecated
* Deprecate metric field of Security Monitoring Rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/878


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.4.0...v1.5.0

## 1.4.0 / 2022-10-03

### Fixed
* Handle errors in deserialization errors by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/836
* Refactor RuleQuery models by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/854
* Fix SearchSLO response structure by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/856
* Fix debug output by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/857
### Added
* Add ListActiveConfigurations endpoint and add new filter[queried] param to list tag configurations endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/785
* Add doesNotExist to synthetics operator enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/825
* Add TopologyMapWidget to dashboard schema by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/828
* Add Overall Status support to SLO Search API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/830
* Add APM Fargate to Usage Metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/824
* Add support for template variable multiselect in dashboards by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/835
* Add storage option to widget query definitions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/840
* Add support for retrieving a security signal by ID by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/848
* Add support for signal correlation API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/841
* Add support for SLO List widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/847
* Add new historical_cost endpoint, and update estimate_cost by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/839
* Add support for incident attachment APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/852

## New Contributors
* @nkzou made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/822

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.3.0...v1.4.0

## 1.3.0 / 2022-08-31

### Fixed
* Update Pagerduty operation `DeletePagerDutyIntegrationService` response status code by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/778
### Added
* Add support for digest auth in synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/786
* Add support for RUM application endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/787
* add priority parameters for dashboard monitor summary widget by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/794
* Add `logs_pattern_stream` to `list_stream` widget source by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/797
* Add group_retention_duration and on_missing_data monitor options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/789
* Expose CSPM aws host count in Usage Metering API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/809
* Add support for configuring zstdCompressorCallback by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/811
* Add estimated ingested logs attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/779
* Add org region to usage summary and billable usage summary by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/804
* add compression methods to metric payloads by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/775
* Add role relationships to RoleUpdateData by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/806
* Add `ci_tests` enum to FormulaAndFunctionEventsDataSource by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/805
* Add missing options and request option to synthetics test by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/796
* Add support for global variable from multistep synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/765
### Changed
* update deprecated usage attribution API docs to direct users to migra… by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/798
* [Synthetics] remove started form eventType enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/800

## New Contributors
* @victorien-provenzano made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/791

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.2.0...v1.3.0

## 1.2.0 / 2022-08-01

### Fixed
* Add synthetics results api replay only tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/763
### Added
* docs(dataviz): update Treemap widget definition with deprecated properties + updated description [VIZZ-2305] by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/764
* Add hourly usage v2 endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/749
* Add metrics field in the RuleQuery by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/750
* Add support for Events V2 endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/727
* [RQ-2492]: Add custom_events to list of product families in hourly-usage api. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/774
* Re-introduce Estimated Cost API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/780


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.1.0...v1.2.0

## 1.1.0 / 2022-07-19

### Fixed
* Fix de/serialization of Array types by @skarimo in https://github.com/DataDog/datadog-api-client-typescript/pull/721
* Remove include_percentiles default by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/734
* Mark message as required for Synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/729
### Added
* Add distribution points intake endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/693
* Add height and width params to graph snapshot by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/716
* Add support for defining histogram requests in Distribution widgets by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/700
* Add DowngradeOrg endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/718
* Add new options for new value detection type on security monitoring rules by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/709
* Add ci execution rule in Synthetics options by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/710
* Add SLO Search API endpoint  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/630
* New usage metering endpoint for estimated cost by org by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/737
* Add estimated indexed spans usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/736
* Handle raw  json for additionalProperties in typescript  by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/707
* Add Application Security Monitoring Hosts Attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/738
* Add support for security monitoring rule dynamic criticality by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/723
* Update IP ranges with synthetics private locations section by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/741
* Add new products to billable summary by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/744
* Update usage attribution enums by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/739
* Add estimated ingested spans to usage attribution by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/755
* Add v2 Security monitoring signals triage operations. by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/745
### Changed
* Remove unstable marker on security list signal endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/715
* Update metric intake v2 accept response by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/742
* Add description of metric type enums by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/756
* remove x-unstable property for usage attribution endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/762

## New Contributors
* @jybp made their first contribution in https://github.com/DataDog/datadog-api-client-typescript/pull/732

**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.0.0...v1.1.0

## 1.0.0 / 2022-06-10

### Fixed
* Fix org name maximum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/584
* Fix pagination for top avg metrics endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/589
* Make type optional for synthetics basic auth model by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/614
* Reduce number of circular dependencies by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/616
* Set correct type for `tags` property by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/631
* Fix debug mode by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/639
* Remove unused pararameter from authn mapping by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/662
* AuthN Mapping spec cleanup to match implementation by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/685
* Fix additionalProperties on SyntheticsAPITestResultData by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/705
* Fix synthetics vitals type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/706
### Added
* [RUM] Add search endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/551
* Add support for getting online archive usage by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/564
* Add endpoint for retrieving audit logs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/563
* Export ObjectSerializer by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/577
* Add support for Error Tracking monitors by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/586
* Add support for `ci-pipelines` monitor using Formulas and Functions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/594
* Add aggregate endpoint for RUM by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/605
* Add  `median` aggregation functions to RUM and logs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/612
* Add endpoint for validation of existing monitors by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/613
* Create new ListStreamSource types in order to deprecate ISSUE_STREAM by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/621
* [Query Value Widget] Add the timeseries background by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/611
* Add `restricted_roles` to Synthetics tests and private locations by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/623
* Add v2 SAML config IdP Metadata upload endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/629
* Support pagination in Python by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/634
* Add Usage API endpoint for observability-pipelines and add properties to v1 GetUsageSummary by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/609
* Add Historical Chargeback Summary endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/643
* Expose v2 usage endpoint for application security monitoring by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/651
* Add `rehydration_max_scan_size_in_gb` field to Logs Archives by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/647
* Add `mute_first_recovery_notification` option to downtime by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/624
* Add lambda traced invocations usage endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/660
* Expose new usage field for react sessions by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/663
* Add missing option and enum value for SecurityMonitoringRule by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/672
* Add pagination methods by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/671
* Support additional properties by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/675
* Adds docs for metric estimate endpoint by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/648
* Allow additional log attributes by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/642
* Add v2 endpoint for submitting series by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/599
* Add `ci-tests` monitor type by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/670
* Add RUM settings schema to synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/683
* Add v1 signal triage endpoints by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/678
* Add connection to synthetics assertion type enum by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/688
* Add grpc subtype to synthetics tests by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/661
* Add include descendants to monthly and hourly usage attribution APIs by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/702
* Add v2 endpoints for Opsgenie Integration by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/695
### Changed
* Handle min/max items to create tuple types by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/669
* Remove unstable marker from SLO corrections API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/694
* Remove unstable/beta note since Metrics Without Limits is GA by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/699
* Create a common package by @therve in https://github.com/DataDog/datadog-api-client-typescript/pull/680
### Removed
* Remove `lambda_usage` and `lambda_percentage` from usage API by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/602
* [dashboards] Removed `issue_stream` type from `ListStreamSource` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/626
### Deprecated
* [monitors] Deprecate `locked` property and clarify documentation for `restricted_roles` by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/579
* Deprecate old usage apis by @api-clients-generation-pipeline in https://github.com/DataDog/datadog-api-client-typescript/pull/665


**Full Changelog**: https://github.com/DataDog/datadog-api-client-typescript/compare/v1.0.0-beta.9...v1.0.0

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
### Security
* Bump url-parse from 1.5.6 to 1.5.9 by @dependabot in https://github.com/DataDog/datadog-api-client-typescript/pull/557

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
