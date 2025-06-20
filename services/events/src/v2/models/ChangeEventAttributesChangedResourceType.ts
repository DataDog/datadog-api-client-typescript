import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the changed resource.
 */
export type ChangeEventAttributesChangedResourceType =
  | typeof FEATURE_FLAG
  | typeof CONFIGURATION
  | UnparsedObject;
export const FEATURE_FLAG = "feature_flag";
export const CONFIGURATION = "configuration";
