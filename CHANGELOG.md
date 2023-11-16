# CHANGELOG

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
