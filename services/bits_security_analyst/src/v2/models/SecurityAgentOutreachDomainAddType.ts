import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of an allowed outreach domain add request.
 */
export type SecurityAgentOutreachDomainAddType =
  | typeof OUTREACH_POLICY_DOMAIN_ADD
  | UnparsedObject;
export const OUTREACH_POLICY_DOMAIN_ADD = "outreach_policy_domain_add";
