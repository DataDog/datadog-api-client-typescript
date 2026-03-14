import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be tokenDefinitions.
 */
export type OnPremManagementServiceRegisterTokenResponseType =
  | typeof TOKENDEFINITIONS
  | UnparsedObject;
export const TOKENDEFINITIONS = "tokenDefinitions";
