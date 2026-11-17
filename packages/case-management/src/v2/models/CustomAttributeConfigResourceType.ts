import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for custom attribute configurations.
 */
export type CustomAttributeConfigResourceType =
  | typeof CUSTOM_ATTRIBUTE
  | UnparsedObject;
export const CUSTOM_ATTRIBUTE = "custom_attribute";
