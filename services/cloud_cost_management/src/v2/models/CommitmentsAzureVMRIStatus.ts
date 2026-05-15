import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of an Azure VM Reserved Instance.
 */
export type CommitmentsAzureVMRIStatus =
  | typeof RUNNING
  | typeof EXPIRED
  | typeof CANCELLED
  | UnparsedObject;
export const RUNNING = "running";
export const EXPIRED = "expired";
export const CANCELLED = "cancelled";
