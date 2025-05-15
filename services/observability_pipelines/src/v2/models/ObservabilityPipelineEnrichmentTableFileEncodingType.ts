import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the encoding format (e.g., CSV) used for enrichment tables.
 */
export type ObservabilityPipelineEnrichmentTableFileEncodingType =
  | typeof CSV
  | UnparsedObject;
export const CSV = "csv";
