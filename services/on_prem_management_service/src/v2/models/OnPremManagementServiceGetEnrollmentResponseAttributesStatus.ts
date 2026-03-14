import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the enrollment.
 */
export type OnPremManagementServiceGetEnrollmentResponseAttributesStatus =
  | typeof NEW
  | typeof SUCCESS
  | typeof FAILED
  | UnparsedObject;
export const NEW = "new";
export const SUCCESS = "success";
export const FAILED = "failed";
