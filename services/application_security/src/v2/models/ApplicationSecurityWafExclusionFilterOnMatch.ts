import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action taken when the exclusion filter matches. When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.
 */
export type ApplicationSecurityWafExclusionFilterOnMatch =
  | typeof MONITOR
  | UnparsedObject;
export const MONITOR = "monitor";
