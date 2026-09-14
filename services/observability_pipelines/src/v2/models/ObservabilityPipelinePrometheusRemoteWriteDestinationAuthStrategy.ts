import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication strategy to use for outgoing Prometheus Remote Write requests.
 */
export type ObservabilityPipelinePrometheusRemoteWriteDestinationAuthStrategy =
  | typeof NONE
  | typeof BASIC
  | typeof BEARER
  | UnparsedObject;
export const NONE = "none";
export const BASIC = "basic";
export const BEARER = "bearer";
