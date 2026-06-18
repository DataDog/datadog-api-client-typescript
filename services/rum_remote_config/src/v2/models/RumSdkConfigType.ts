import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `rum_sdk_config`.
 */
export type RumSdkConfigType = typeof RUM_SDK_CONFIG | UnparsedObject;
export const RUM_SDK_CONFIG = "rum_sdk_config";
