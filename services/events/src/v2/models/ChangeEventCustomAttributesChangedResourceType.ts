import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource that was changed.
 */
export type ChangeEventCustomAttributesChangedResourceType =
  | typeof FEATURE_FLAG
  | typeof CONFIGURATION
  | UnparsedObject;
export const FEATURE_FLAG = "feature_flag";
export const CONFIGURATION = "configuration";
