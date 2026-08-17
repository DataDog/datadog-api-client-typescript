import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Splunk HEC endpoint to send events to. Use `event` to send structured events to the `/event` endpoint, or `raw` to send the raw message to the `/raw` endpoint.
 */
export type ObservabilityPipelineSplunkHecDestinationEndpointTarget =
  | typeof EVENT
  | typeof RAW
  | UnparsedObject;
export const EVENT = "event";
export const RAW = "raw";
