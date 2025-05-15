import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `rsyslog`.
 */
export type ObservabilityPipelineRsyslogDestinationType =
  | typeof RSYSLOG
  | UnparsedObject;
export const RSYSLOG = "rsyslog";
