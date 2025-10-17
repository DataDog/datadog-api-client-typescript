import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom attributes config JSON:API resource type
 */
export type CustomAttributeConfigResourceType =
  | typeof CUSTOM_ATTRIBUTE
  | UnparsedObject;
export const CUSTOM_ATTRIBUTE = "custom_attribute";
