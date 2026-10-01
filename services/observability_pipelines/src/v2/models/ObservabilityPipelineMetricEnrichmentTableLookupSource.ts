import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableMetricNameLookup } from "./ObservabilityPipelineMetricEnrichmentTableMetricNameLookup";
import { ObservabilityPipelineMetricEnrichmentTableTagLookup } from "./ObservabilityPipelineMetricEnrichmentTableTagLookup";

/**
 * Specifies the source of the key value used for metric enrichment table lookups.
 * The lookup key can be either the metric name or a metric tag.
 */
export type ObservabilityPipelineMetricEnrichmentTableLookupSource =
  | ObservabilityPipelineMetricEnrichmentTableMetricNameLookup
  | ObservabilityPipelineMetricEnrichmentTableTagLookup
  | UnparsedObject;
