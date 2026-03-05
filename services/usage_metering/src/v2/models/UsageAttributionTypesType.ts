import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of usage attribution types data.
 */
export type UsageAttributionTypesType =
  | typeof USAGE_ATTRIBUTION_TYPES
  | UnparsedObject;
export const USAGE_ATTRIBUTION_TYPES = "usage_attribution_types";
