import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Stop bandit request resource type.
 */
export type ExperimentsStopBanditV2RequestDataType =
  | typeof STOP_BANDIT_REQUEST
  | UnparsedObject;
export const STOP_BANDIT_REQUEST = "stop-bandit-request";
