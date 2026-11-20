import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TreemapBackendDefinitionSizeBy =
  | typeof PCT_CPU
  | typeof PCT_MEM
  | UnparsedObject;
export const PCT_CPU = "pct_cpu";
export const PCT_MEM = "pct_mem";
