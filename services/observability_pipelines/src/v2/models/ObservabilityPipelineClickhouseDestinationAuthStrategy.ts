import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication strategy for ClickHouse HTTP requests. Only `basic` is supported.
 */
export type ObservabilityPipelineClickhouseDestinationAuthStrategy =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
