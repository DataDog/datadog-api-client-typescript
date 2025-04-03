import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the resource. The value should always be `exclusion_filter`.
 */
export type ApplicationSecurityWafExclusionFilterType =
  | typeof EXCLUSION_FILTER
  | UnparsedObject;
export const EXCLUSION_FILTER = "exclusion_filter";
