import { UnparsedObject } from "@datadog/datadog-api-client";

import { Metric } from "./Metric";
import { MetricTagConfiguration } from "./MetricTagConfiguration";

/**
 * Object for a metrics and metric tag configurations.
 */
export type MetricsAndMetricTagConfigurations =
  | Metric
  | MetricTagConfiguration
  | UnparsedObject;
