import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * HTTP authentication method.
 */
export type ObservabilityPipelinePrometheusRemoteWriteSourceAuthStrategy =
  | typeof NONE
  | typeof PLAIN
  | UnparsedObject;
export const NONE = "none";
export const PLAIN = "plain";
