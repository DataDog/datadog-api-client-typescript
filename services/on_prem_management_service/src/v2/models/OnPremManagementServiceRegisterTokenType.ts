import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be registerTokenRequest.
 */
export type OnPremManagementServiceRegisterTokenType =
  | typeof REGISTERTOKENREQUEST
  | UnparsedObject;
export const REGISTERTOKENREQUEST = "registerTokenRequest";
