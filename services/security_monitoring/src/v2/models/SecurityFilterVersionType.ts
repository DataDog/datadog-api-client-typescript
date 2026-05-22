import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `security_filters_configuration`.
 */
export type SecurityFilterVersionType =
  | typeof SECURITY_FILTERS_CONFIGURATION
  | UnparsedObject;
export const SECURITY_FILTERS_CONFIGURATION = "security_filters_configuration";
