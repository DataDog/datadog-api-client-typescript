import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Defines how to compare key fields for enrichment table lookups.
 */
export type ObservabilityPipelineEnrichmentTableFileKeyItemsComparison =
  | typeof EQUALS
  | UnparsedObject;
export const EQUALS = "equals";
