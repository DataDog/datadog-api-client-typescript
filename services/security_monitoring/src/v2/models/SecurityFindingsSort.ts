import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort parameters when querying security findings.
 */
export type SecurityFindingsSort =
  | typeof DETECTION_CHANGED_AT_ASC
  | typeof DETECTION_CHANGED_AT_DESC
  | UnparsedObject;
export const DETECTION_CHANGED_AT_ASC = "@detection_changed_at";
export const DETECTION_CHANGED_AT_DESC = "-@detection_changed_at";
