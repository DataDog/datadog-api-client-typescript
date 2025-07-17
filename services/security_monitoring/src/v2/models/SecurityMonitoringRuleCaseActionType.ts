import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action type.
 */
export type SecurityMonitoringRuleCaseActionType =
  | typeof BLOCK_IP
  | typeof BLOCK_USER
  | typeof USER_BEHAVIOR
  | typeof FLAG_IP
  | UnparsedObject;
export const BLOCK_IP = "block_ip";
export const BLOCK_USER = "block_user";
export const USER_BEHAVIOR = "user_behavior";
export const FLAG_IP = "flag_ip";
