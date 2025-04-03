import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Timings scope for response time assertions.
 */
export type SyntheticsAssertionTimingsScope =
  | typeof ALL
  | typeof WITHOUT_DNS
  | UnparsedObject;
export const ALL = "all";
export const WITHOUT_DNS = "withoutDNS";
