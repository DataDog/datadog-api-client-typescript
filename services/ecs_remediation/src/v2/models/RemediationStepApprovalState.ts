import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Approval state for a remediation step.
 */
export type RemediationStepApprovalState =
  | typeof PENDING_APPROVAL
  | typeof APPROVED
  | typeof REJECTED
  | UnparsedObject;
export const PENDING_APPROVAL = "pending_approval";
export const APPROVED = "approved";
export const REJECTED = "rejected";
