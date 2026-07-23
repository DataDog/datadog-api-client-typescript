import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership untagged findings resource. The value should always be `ownership_untagged_findings`.
 */
export type OwnershipUntaggedFindingsType =
  | typeof OWNERSHIP_UNTAGGED_FINDINGS
  | UnparsedObject;
export const OWNERSHIP_UNTAGGED_FINDINGS = "ownership_untagged_findings";
