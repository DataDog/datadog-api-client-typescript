import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `enrichment_table`.
 */
export type ObservabilityPipelineEnrichmentTableProcessorType =
  | typeof ENRICHMENT_TABLE
  | UnparsedObject;
export const ENRICHMENT_TABLE = "enrichment_table";
