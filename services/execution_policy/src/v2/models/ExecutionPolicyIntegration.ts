import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The integration the action pattern applies to.
 */
export type ExecutionPolicyIntegration =
  | typeof INTEGRATION_KUBERNETES
  | typeof INTEGRATION_SCRIPT
  | typeof INTEGRATION_REMOTE_ACTION
  | UnparsedObject;
export const INTEGRATION_KUBERNETES = "INTEGRATION_KUBERNETES";
export const INTEGRATION_SCRIPT = "INTEGRATION_SCRIPT";
export const INTEGRATION_REMOTE_ACTION = "INTEGRATION_REMOTE_ACTION";
