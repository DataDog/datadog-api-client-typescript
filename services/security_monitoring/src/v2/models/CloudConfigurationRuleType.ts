import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule type.
 */
export type CloudConfigurationRuleType =
  | typeof CLOUD_CONFIGURATION
  | UnparsedObject;
export const CLOUD_CONFIGURATION = "cloud_configuration";
