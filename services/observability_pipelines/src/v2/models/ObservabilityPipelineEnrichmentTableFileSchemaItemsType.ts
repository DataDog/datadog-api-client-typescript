import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Declares allowed data types for enrichment table columns.
 */
export type ObservabilityPipelineEnrichmentTableFileSchemaItemsType =
  | typeof STRING
  | typeof BOOLEAN
  | typeof INTEGER
  | typeof FLOAT
  | typeof DATE
  | typeof TIMESTAMP
  | UnparsedObject;
export const STRING = "string";
export const BOOLEAN = "boolean";
export const INTEGER = "integer";
export const FLOAT = "float";
export const DATE = "date";
export const TIMESTAMP = "timestamp";
