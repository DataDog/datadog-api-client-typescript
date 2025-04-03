import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of filtering action.
 */
export type SecurityMonitoringFilterAction =
  | typeof REQUIRE
  | typeof SUPPRESS
  | UnparsedObject;
export const REQUIRE = "require";
export const SUPPRESS = "suppress";
