import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Override the default action to take when the WAF custom rule would block.
 */
export type ApplicationSecurityWafCustomRuleActionAction =
  | typeof REDIRECT_REQUEST
  | typeof BLOCK_REQUEST
  | UnparsedObject;
export const REDIRECT_REQUEST = "redirect_request";
export const BLOCK_REQUEST = "block_request";
