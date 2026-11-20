import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaDatasetApmMetricsQuery } from "./FormulaDatasetApmMetricsQuery";
import { FormulaDatasetMetricQuery } from "./FormulaDatasetMetricQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DashboardInlineSchema40 =
  | FormulaDatasetMetricQuery
  | FormulaDatasetApmMetricsQuery
  | UnparsedObject;
