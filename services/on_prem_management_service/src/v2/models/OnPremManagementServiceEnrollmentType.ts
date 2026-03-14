import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be enrollment.
 */
export type OnPremManagementServiceEnrollmentType =
  | typeof ENROLLMENT
  | UnparsedObject;
export const ENROLLMENT = "enrollment";
