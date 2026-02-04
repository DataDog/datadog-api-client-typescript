import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be getEnrollmentResponse.
 */
export type OnPremManagementServiceGetEnrollmentResponseType =
  | typeof GETENROLLMENTRESPONSE
  | UnparsedObject;
export const GETENROLLMENTRESPONSE = "getEnrollmentResponse";
