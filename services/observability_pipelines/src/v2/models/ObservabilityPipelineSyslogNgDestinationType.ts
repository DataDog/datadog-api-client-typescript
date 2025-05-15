import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `syslog_ng`.
 */
export type ObservabilityPipelineSyslogNgDestinationType =
  | typeof SYSLOG_NG
  | UnparsedObject;
export const SYSLOG_NG = "syslog_ng";
