import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type DatabricksIntegrationAccountPatAuthType =
  | typeof PAT
  | UnparsedObject;
export const PAT = "pat";
