import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The effective type of identity used to run the workflow.
 */
export type WorkflowRunAsUserMode =
  | typeof OWNER
  | typeof SERVICE_ACCOUNT
  | typeof INITIATOR
  | UnparsedObject;
export const OWNER = "owner";
export const SERVICE_ACCOUNT = "service_account";
export const INITIATOR = "initiator";
