import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The organization's outreach mode. `off` disables user outreach. `manual` only sends outreach an analyst
 * triggers. `automated` auto-sends automated interviews for rules with outreach enabled, to users whose email
 * domain is allowed.
 */
export type SecurityAgentOutreachMode =
  | typeof OFF
  | typeof MANUAL
  | typeof AUTOMATED
  | UnparsedObject;
export const OFF = "off";
export const MANUAL = "manual";
export const AUTOMATED = "automated";
