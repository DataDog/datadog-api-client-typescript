import { UnparsedObject } from "@datadog/datadog-api-client";

import { MetricDashboardAsset } from "./MetricDashboardAsset";
import { MetricMonitorAsset } from "./MetricMonitorAsset";
import { MetricNotebookAsset } from "./MetricNotebookAsset";
import { MetricSLOAsset } from "./MetricSLOAsset";

/**
 * List of included assets with full set of attributes.
 */
export type MetricAssetResponseIncluded =
  | MetricDashboardAsset
  | MetricMonitorAsset
  | MetricNotebookAsset
  | MetricSLOAsset
  | UnparsedObject;
