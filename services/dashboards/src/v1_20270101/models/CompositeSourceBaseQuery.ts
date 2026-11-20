import { UnparsedObject } from "@datadog/datadog-api-client";

import { CompositeEventsPlatformQueryDefinition } from "./CompositeEventsPlatformQueryDefinition";
import { FormulaMetricsQueryCloudCost } from "./FormulaMetricsQueryCloudCost";
import { FormulaMetricsQueryDatadogUsage } from "./FormulaMetricsQueryDatadogUsage";
import { FormulaMetricsQueryMetrics } from "./FormulaMetricsQueryMetrics";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CompositeSourceBaseQuery =
  | FormulaMetricsQueryMetrics
  | FormulaMetricsQueryCloudCost
  | FormulaMetricsQueryDatadogUsage
  | CompositeEventsPlatformQueryDefinition
  | UnparsedObject;
