import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `rsyslog`.
 */
export type ObservabilityPipelineRsyslogSourceType =
  | typeof RSYSLOG
  | UnparsedObject;
export const RSYSLOG = "rsyslog";
