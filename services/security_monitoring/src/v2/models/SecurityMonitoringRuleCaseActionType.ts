import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action type.
 */
export type SecurityMonitoringRuleCaseActionType =
  | typeof BLOCK_IP
  | typeof BLOCK_USER
  | UnparsedObject;
export const BLOCK_IP = "block_ip";
export const BLOCK_USER = "block_user";
