import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * TLS mode. Must be `with_client_cert`.
 */
export type ObservabilityPipelineWebsocketSourceTlsWithClientCertMode =
  | typeof WITH_CLIENT_CERT
  | UnparsedObject;
export const WITH_CLIENT_CERT = "with_client_cert";
