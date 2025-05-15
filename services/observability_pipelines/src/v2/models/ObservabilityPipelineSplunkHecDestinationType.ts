import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `splunk_hec`.
 */
export type ObservabilityPipelineSplunkHecDestinationType =
  | typeof SPLUNK_HEC
  | UnparsedObject;
export const SPLUNK_HEC = "splunk_hec";
