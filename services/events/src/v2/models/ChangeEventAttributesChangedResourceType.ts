import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the changed resource.
 */
export type ChangeEventAttributesChangedResourceType =
  | typeof FEATURE_FLAG
  | typeof METRIC_CONFIGURATION
  | UnparsedObject;
export const FEATURE_FLAG = "feature_flag";
export const METRIC_CONFIGURATION = "metric_configuration";
