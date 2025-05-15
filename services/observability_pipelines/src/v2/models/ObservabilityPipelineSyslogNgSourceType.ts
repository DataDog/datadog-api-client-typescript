import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `syslog_ng`.
 */
export type ObservabilityPipelineSyslogNgSourceType =
  | typeof SYSLOG_NG
  | UnparsedObject;
export const SYSLOG_NG = "syslog_ng";
