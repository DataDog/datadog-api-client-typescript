# CHANGELOG

## 0.0.1-beta.5/2026-03-06

### Added
* Add FormulaAndFunctionEventQueryGroupByFields schema to support flat group_by form [#3564](https://github.com/DataDog/datadog-api-client-typescript/pull/3564)

### Deprecated
* Mark legacy non-FnF query fields and WidgetEvent as deprecated in dashboard spec + update Distribuition docs [#3560](https://github.com/DataDog/datadog-api-client-typescript/pull/3560)

### Fixed
* Fix WidgetNewFixedSpan - timestamps are milliseconds not seconds [#3512](https://github.com/DataDog/datadog-api-client-typescript/pull/3512)

## 0.0.1-beta.4/2026-02-17

### Added
* Add order_by field to timeseries widget request schema [#3338](https://github.com/DataDog/datadog-api-client-typescript/pull/3338)

## 0.0.1-beta.3/2026-01-15

### Added
* Add bar chart widget to Dashboards API [#3085](https://github.com/DataDog/datadog-api-client-typescript/pull/3085)
* Update distribution and heatmap's `markers` ,`num_buckets` properties and allowed request/query [#3083](https://github.com/DataDog/datadog-api-client-typescript/pull/3083)

## 0.0.1-beta.2/2025-12-17

### Security
* Bump the `datadog-api-client` min version [#3129](https://github.com/DataDog/datadog-api-client-typescript/pull/3129)

### Added
* Dashboards - Add semantic_mode support to FormulaAndFunctionMetricQueryDefinition [#3087](https://github.com/DataDog/datadog-api-client-typescript/pull/3087)
* update geomap widget definition about `conditional_format` and `text_formats` and view focus [#3065](https://github.com/DataDog/datadog-api-client-typescript/pull/3065)
* Dashboards - Add on_call_events datasources [#2960](https://github.com/DataDog/datadog-api-client-typescript/pull/2960)
* Add product analytics to FormulaAndFunctionEventsDataSource [#2794](https://github.com/DataDog/datadog-api-client-typescript/pull/2794)
* Extend Widget time schema with support for hide_incomplete_cost_data [#2707](https://github.com/DataDog/datadog-api-client-typescript/pull/2707)

### Changed
* Update template variable schemas with type field in dashboards and shared dashboards endpoints for group by template variables [#2439](https://github.com/DataDog/datadog-api-client-typescript/pull/2439)

## 0.0.1-beta.1/2025-05-28
