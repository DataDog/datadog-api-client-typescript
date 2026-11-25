import { UnparsedObject } from "@datadog/datadog-api-client";

import { ApmMetricsHistogramRequest } from "./ApmMetricsHistogramRequest";
import { ApmStatsHistogramRequest } from "./ApmStatsHistogramRequest";
import { EventsHistogramRequest } from "./EventsHistogramRequest";
import { MetricsHistogramRequest } from "./MetricsHistogramRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HistogramRequest =
  | MetricsHistogramRequest
  | ApmStatsHistogramRequest
  | ApmMetricsHistogramRequest
  | EventsHistogramRequest
  | UnparsedObject;
