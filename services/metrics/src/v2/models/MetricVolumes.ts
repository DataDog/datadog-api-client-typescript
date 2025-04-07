import { UnparsedObject } from "@datadog/datadog-api-client";

import { MetricDistinctVolume } from "./MetricDistinctVolume";
import { MetricIngestedIndexedVolume } from "./MetricIngestedIndexedVolume";

/**
 * Possible response objects for a metric's volume.
 */
export type MetricVolumes =
  | MetricDistinctVolume
  | MetricIngestedIndexedVolume
  | UnparsedObject;
