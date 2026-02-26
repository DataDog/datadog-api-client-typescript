import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AWS CCM Config resource type.
 */
export type AWSCcmConfigType = typeof CCM_CONFIG | UnparsedObject;
export const CCM_CONFIG = "ccm_config";
