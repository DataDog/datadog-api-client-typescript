import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The service account run-as type.
 */
export type WorkflowRunAsServiceAccountType =
  | typeof SERVICE_ACCOUNT
  | UnparsedObject;
export const SERVICE_ACCOUNT = "service_account";
