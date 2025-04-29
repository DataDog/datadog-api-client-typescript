import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value must be `custom_framework`.
 */
export type CustomFrameworkType = typeof CUSTOM_FRAMEWORK | UnparsedObject;
export const CUSTOM_FRAMEWORK = "custom_framework";
