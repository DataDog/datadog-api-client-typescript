import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * TLS mode. Must be `enabled`.
 */
export type ObservabilityPipelineWebsocketSourceTlsEnabledMode =
  | typeof ENABLED
  | UnparsedObject;
export const ENABLED = "enabled";
