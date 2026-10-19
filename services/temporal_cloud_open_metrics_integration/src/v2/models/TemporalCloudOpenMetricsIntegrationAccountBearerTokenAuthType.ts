import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType =
  | typeof BEARER_TOKEN
  | UnparsedObject;
export const BEARER_TOKEN = "bearer_token";
