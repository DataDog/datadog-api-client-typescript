import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableFileProcessor } from "./ObservabilityPipelineMetricEnrichmentTableFileProcessor";
import { ObservabilityPipelineMetricEnrichmentTableReferenceTableProcessor } from "./ObservabilityPipelineMetricEnrichmentTableReferenceTableProcessor";

/**
 * The `enrichment_table` processor enriches metrics with tags from a static CSV file or a Datadog reference table.
 * It looks up a row using the metric name or a metric tag value. It then adds each column of the matching row as a
 * metric tag, overwriting any existing tag with the same key. Exactly one of `file` or `reference_table` must be
 * configured.
 *
 * **Supported pipeline types:** metrics
 */
export type ObservabilityPipelineMetricEnrichmentTableProcessor =
  | ObservabilityPipelineMetricEnrichmentTableFileProcessor
  | ObservabilityPipelineMetricEnrichmentTableReferenceTableProcessor
  | UnparsedObject;
