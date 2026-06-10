import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership evidence resource. The value should always be `ownership_evidence`.
 */
export type OwnershipEvidenceType = typeof OWNERSHIP_EVIDENCE | UnparsedObject;
export const OWNERSHIP_EVIDENCE = "ownership_evidence";
