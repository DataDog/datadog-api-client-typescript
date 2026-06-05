import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AWS CCM config validation resource type.
 */
export type AWSCcmConfigValidationType =
  | typeof CCM_CONFIG_VALIDATION
  | UnparsedObject;
export const CCM_CONFIG_VALIDATION = "ccm_config_validation";
