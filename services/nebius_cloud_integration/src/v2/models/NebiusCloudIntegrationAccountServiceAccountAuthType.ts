import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type NebiusCloudIntegrationAccountServiceAccountAuthType =
  | typeof NEBIUS_SERVICE_ACCOUNT
  | UnparsedObject;
export const NEBIUS_SERVICE_ACCOUNT = "nebius_service_account";
