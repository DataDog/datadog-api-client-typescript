import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `prometheus_remote_write`.
 */
export type ObservabilityPipelinePrometheusRemoteWriteSourceType =
  | typeof PROMETHEUS_REMOTE_WRITE
  | UnparsedObject;
export const PROMETHEUS_REMOTE_WRITE = "prometheus_remote_write";
