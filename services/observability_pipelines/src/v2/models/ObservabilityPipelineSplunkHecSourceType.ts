import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. Always `splunk_hec`.
 */
export type ObservabilityPipelineSplunkHecSourceType =
  | typeof SPLUNK_HEC
  | UnparsedObject;
export const SPLUNK_HEC = "splunk_hec";
