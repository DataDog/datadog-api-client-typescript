import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value must be `clickhouse`.
 */
export type ObservabilityPipelineClickhouseDestinationType =
  | typeof CLICKHOUSE
  | UnparsedObject;
export const CLICKHOUSE = "clickhouse";
