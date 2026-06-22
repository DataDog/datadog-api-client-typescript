import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The verdict a guardrail applied to a plan or investigation.
 */
export type RemediationGuardrailVerdict =
  | typeof ALLOWED
  | typeof APPROVAL_REQUIRED
  | typeof DENIED
  | UnparsedObject;
export const ALLOWED = "allowed";
export const APPROVAL_REQUIRED = "approval_required";
export const DENIED = "denied";
