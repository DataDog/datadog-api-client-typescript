import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `client_certificate_credential`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind =
  typeof CLIENT_CERTIFICATE_CREDENTIAL | UnparsedObject;
export const CLIENT_CERTIFICATE_CREDENTIAL = "client_certificate_credential";
