import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. Always `splunk_tcp`.
 */
export type ObservabilityPipelineSplunkTcpSourceType =
  | typeof SPLUNK_TCP
  | UnparsedObject;
export const SPLUNK_TCP = "splunk_tcp";
