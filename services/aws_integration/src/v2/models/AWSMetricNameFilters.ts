import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSMetricNameFiltersExcludeOnly } from "./AWSMetricNameFiltersExcludeOnly";
import { AWSMetricNameFiltersIncludeOnly } from "./AWSMetricNameFiltersIncludeOnly";

/**
 * AWS CloudWatch metric name filter for a single namespace.
 * Exactly one of `include_only` or `exclude_only` must be set.
 */
export type AWSMetricNameFilters =
  | AWSMetricNameFiltersIncludeOnly
  | AWSMetricNameFiltersExcludeOnly
  | UnparsedObject;
