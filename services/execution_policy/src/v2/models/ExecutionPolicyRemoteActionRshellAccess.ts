import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The level of remote shell access granted for the target paths.
 */
export type ExecutionPolicyRemoteActionRshellAccess =
  | typeof READ_ONLY
  | typeof READ_WRITE
  | UnparsedObject;
export const READ_ONLY = "read_only";
export const READ_WRITE = "read_write";
