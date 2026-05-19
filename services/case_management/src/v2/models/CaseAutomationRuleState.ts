import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the automation rule is active. Enabled rules trigger on matching case events; disabled rules are inactive but preserve their configuration.
 */
export type CaseAutomationRuleState =
  | typeof ENABLED
  | typeof DISABLED
  | UnparsedObject;
export const ENABLED = "ENABLED";
export const DISABLED = "DISABLED";
