import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be createEnrollmentResponse.
 */
export type OnPremManagementServiceCreateEnrollmentResponseType =
  | typeof CREATEENROLLMENTRESPONSE
  | UnparsedObject;
export const CREATEENROLLMENTRESPONSE = "createEnrollmentResponse";
