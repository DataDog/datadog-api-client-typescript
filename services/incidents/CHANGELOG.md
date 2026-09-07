# CHANGELOG

## 0.0.1-beta.9/2026-09-02

### Added
* Add is_iac support to send X-Datadog-Managed-By header [#4945](https://github.com/DataDog/datadog-api-client-typescript/pull/4945)

## 0.0.1-beta.8/2026-08-06

### Added
* Expand incidents postmortem-templates spec to full CRUD contract [#4678](https://github.com/DataDog/datadog-api-client-typescript/pull/4678)
* Make incident user-defined-roles API public but keep it unstable [#4638](https://github.com/DataDog/datadog-api-client-typescript/pull/4638)
* Add configuration attribute to incident type schema [#4577](https://github.com/DataDog/datadog-api-client-typescript/pull/4577)
* Add OpenAPI specifications for incidents-rapid-api endpoints [#4322](https://github.com/DataDog/datadog-api-client-typescript/pull/4322)

### Fixed
* Fix incident user-defined role policy not required on create [#4674](https://github.com/DataDog/datadog-api-client-typescript/pull/4674)

### Removed
* Remove prerequisite, table_id, and attached_to fields from incident user-defined field API [#4595](https://github.com/DataDog/datadog-api-client-typescript/pull/4595)

## 0.0.1-beta.7/2026-05-15

### Added
* Add OpenAPI spec for current user endpoints [#4100](https://github.com/DataDog/datadog-api-client-typescript/pull/4100)
* Add integration_type for Microsoft Teams to IncidentIntegrationMetadataAttributes [#4084](https://github.com/DataDog/datadog-api-client-typescript/pull/4084)

## 0.0.1-beta.6/2026-04-24

### Changed
* Rename pat_uuid to pat_id and remove alias field from PAT spec [#3988](https://github.com/DataDog/datadog-api-client-typescript/pull/3988)
* Rename pat_uuid to pat_id and remove alias field from PAT spec [#3947](https://github.com/DataDog/datadog-api-client-typescript/pull/3947)

## 0.0.1-beta.5/2026-03-06

### Added
* Add documentation for POST api/v2/incidents/import [#3481](https://github.com/DataDog/datadog-api-client-typescript/pull/3481)

## 0.0.1-beta.4/2026-02-17

### Added
* Create OpenAPI for incidents config postmortem templates [#3397](https://github.com/DataDog/datadog-api-client-typescript/pull/3397)
* Create OpenAPI for incidents config global endpoints [#3318](https://github.com/DataDog/datadog-api-client-typescript/pull/3318)
* Add missing incident attachments documentation [#3280](https://github.com/DataDog/datadog-api-client-typescript/pull/3280)

### Fixed
* Modify api spec description of create postmortem attachment [#3384](https://github.com/DataDog/datadog-api-client-typescript/pull/3384)

## 0.0.1-beta.3/2026-01-08

### Changed
* Add documentation for GET, POST, PATCH, and DELETE api/v2/incidents/incident_id/attachments endpoints [#3090](https://github.com/DataDog/datadog-api-client-typescript/pull/3090)

## 0.0.1-beta.2/2025-12-17

### Changed
* Mark Incident Impact Endpoints stable [#3133](https://github.com/DataDog/datadog-api-client-typescript/pull/3133)
* add suppression version history [#3055](https://github.com/DataDog/datadog-api-client-typescript/pull/3055)

### Security
* Bump the `datadog-api-client` min version [#3129](https://github.com/DataDog/datadog-api-client-typescript/pull/3129)

### Added
* Add `GET /api/v2/apm/services` endpoint to public documentation [#3098](https://github.com/DataDog/datadog-api-client-typescript/pull/3098)
* Add last_login_time to Users v2 API [#2881](https://github.com/DataDog/datadog-api-client-typescript/pull/2881)
* Add Incident Notification Rules Public Spec [#2771](https://github.com/DataDog/datadog-api-client-typescript/pull/2771)
* Publish new incident impact APIs [#2755](https://github.com/DataDog/datadog-api-client-typescript/pull/2755)
* Add Incident Notification Template Public Docs [#2754](https://github.com/DataDog/datadog-api-client-typescript/pull/2754)
* Update Incident API specs to include `is_test` in `POST /incidents` and incidents response [#2421](https://github.com/DataDog/datadog-api-client-typescript/pull/2421)

## 0.0.1-beta.1/2025-05-28
