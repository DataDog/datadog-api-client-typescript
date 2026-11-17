import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Why the policy was applied.
 */
export type ExperimentsBanditPolicyReason =
  | typeof ACTIVATION
  | typeof REFRESH
  | typeof ARM_CHANGE
  | typeof SCHEDULED_END
  | typeof STOP
  | UnparsedObject;
export const ACTIVATION = "ACTIVATION";
export const REFRESH = "REFRESH";
export const ARM_CHANGE = "ARM_CHANGE";
export const SCHEDULED_END = "SCHEDULED_END";
export const STOP = "STOP";
