import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineWebsocketSourceTlsEnabled } from "./ObservabilityPipelineWebsocketSourceTlsEnabled";
import { ObservabilityPipelineWebsocketSourceTlsWithClientCert } from "./ObservabilityPipelineWebsocketSourceTlsWithClientCert";

/**
 * TLS configuration for the WebSocket source. Use `enabled` for standard `wss://` connections, or `with_client_cert` to present a client certificate for mutual TLS.
 */
export type ObservabilityPipelineWebsocketSourceTls =
  | ObservabilityPipelineWebsocketSourceTlsEnabled
  | ObservabilityPipelineWebsocketSourceTlsWithClientCert
  | UnparsedObject;
