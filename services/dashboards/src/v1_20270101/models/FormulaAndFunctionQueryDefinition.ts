import { UnparsedObject } from "@datadog/datadog-api-client";

import { AggregateAugmentedQuery } from "./AggregateAugmentedQuery";
import { AggregateFilteredQuery } from "./AggregateFilteredQuery";
import { AggregateSegmentQuery } from "./AggregateSegmentQuery";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FormulaApmDependencyStatsQuery } from "./FormulaApmDependencyStatsQuery";
import { FormulaApmMetricsQuery } from "./FormulaApmMetricsQuery";
import { FormulaApmResourceStatsQuery } from "./FormulaApmResourceStatsQuery";
import { FormulaCaseQuery } from "./FormulaCaseQuery";
import { FormulaChangeTrackingQuery } from "./FormulaChangeTrackingQuery";
import { FormulaDataQualityMetricsQuery } from "./FormulaDataQualityMetricsQuery";
import { FormulaDatasetQuery } from "./FormulaDatasetQuery";
import { FormulaDetectionRulesQuery } from "./FormulaDetectionRulesQuery";
import { FormulaDoraQuery } from "./FormulaDoraQuery";
import { FormulaGraphQuery } from "./FormulaGraphQuery";
import { FormulaIncidentsQuery } from "./FormulaIncidentsQuery";
import { FormulaManagedResourceQuery } from "./FormulaManagedResourceQuery";
import { FormulaMetricsQueryCloudCost } from "./FormulaMetricsQueryCloudCost";
import { FormulaMetricsQueryDatadogUsage } from "./FormulaMetricsQueryDatadogUsage";
import { FormulaMetricsQueryMetrics } from "./FormulaMetricsQueryMetrics";
import { FormulaProductAnalyticsExtendedQuery } from "./FormulaProductAnalyticsExtendedQuery";
import { FormulaReferenceTableQuery } from "./FormulaReferenceTableQuery";
import { FormulaRetentionQuery } from "./FormulaRetentionQuery";
import { FormulaSloQuery } from "./FormulaSloQuery";
import { FormulaUserJourneyQuery } from "./FormulaUserJourneyQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaAndFunctionQueryDefinition =
  | FormulaMetricsQueryMetrics
  | FormulaMetricsQueryCloudCost
  | FormulaMetricsQueryDatadogUsage
  | FormulaAndFunctionEventQueryDefinition
  | FormulaAndFunctionProcessQueryDefinition
  | FormulaApmDependencyStatsQuery
  | FormulaApmResourceStatsQuery
  | FormulaApmMetricsQuery
  | FormulaIncidentsQuery
  | FormulaSloQuery
  | FormulaCaseQuery
  | FormulaGraphQuery
  | FormulaUserJourneyQuery
  | FormulaDoraQuery
  | FormulaChangeTrackingQuery
  | FormulaDetectionRulesQuery
  | AggregateFilteredQuery
  | AggregateAugmentedQuery
  | AggregateSegmentQuery
  | FormulaDatasetQuery
  | FormulaManagedResourceQuery
  | FormulaReferenceTableQuery
  | FormulaRetentionQuery
  | FormulaDataQualityMetricsQuery
  | FormulaProductAnalyticsExtendedQuery
  | UnparsedObject;
