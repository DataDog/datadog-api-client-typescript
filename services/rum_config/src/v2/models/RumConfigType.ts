import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `rum_config`.
 */
export type RumConfigType = typeof RUM_CONFIG | UnparsedObject;
export const RUM_CONFIG = "rum_config";
