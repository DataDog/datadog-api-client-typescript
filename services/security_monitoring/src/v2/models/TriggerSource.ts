import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of security issues on which the rule applies. Notification rules based on security signals need to use the trigger source "security_signals",
 * while notification rules based on security vulnerabilities need to use the trigger source "security_findings".
 */
export type TriggerSource =
  | typeof SECURITY_FINDINGS
  | typeof SECURITY_SIGNALS
  | UnparsedObject;
export const SECURITY_FINDINGS = "security_findings";
export const SECURITY_SIGNALS = "security_signals";
