import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Remediation groups resource type.
 */
export type RemediationGroupType = typeof REMEDIATION_GROUPS | UnparsedObject;
export const REMEDIATION_GROUPS = "remediation_groups";
