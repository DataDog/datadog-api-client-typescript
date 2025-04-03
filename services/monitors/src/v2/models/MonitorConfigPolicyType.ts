import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The monitor configuration policy type.
 */
export type MonitorConfigPolicyType = typeof TAG | UnparsedObject;
export const TAG = "tag";
