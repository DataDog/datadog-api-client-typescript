import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DistributionBackendDefinitionLegendLayout =
  | typeof VERTICAL
  | typeof HORIZONTAL
  | typeof AUTO
  | UnparsedObject;
export const VERTICAL = "vertical";
export const HORIZONTAL = "horizontal";
export const AUTO = "auto";
