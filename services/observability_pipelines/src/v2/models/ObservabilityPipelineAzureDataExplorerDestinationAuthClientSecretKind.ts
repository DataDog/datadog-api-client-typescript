import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `client_secret_credential`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecretKind =
  typeof CLIENT_SECRET_CREDENTIAL | UnparsedObject;
export const CLIENT_SECRET_CREDENTIAL = "client_secret_credential";
