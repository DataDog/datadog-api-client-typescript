import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current state of the detection. Possible values are `active`, `exception`, `mitigated`, `inactive`, `obsolete`, `resolved_externally`, and `mitigation_in_progress`.
 */
export type GovernanceControlDetectionState =
  | typeof ACTIVE
  | typeof EXCEPTION
  | typeof MITIGATED
  | typeof INACTIVE
  | typeof OBSOLETE
  | typeof RESOLVED_EXTERNALLY
  | typeof MITIGATION_IN_PROGRESS
  | UnparsedObject;
export const ACTIVE = "active";
export const EXCEPTION = "exception";
export const MITIGATED = "mitigated";
export const INACTIVE = "inactive";
export const OBSOLETE = "obsolete";
export const RESOLVED_EXTERNALLY = "resolved_externally";
export const MITIGATION_IN_PROGRESS = "mitigation_in_progress";
