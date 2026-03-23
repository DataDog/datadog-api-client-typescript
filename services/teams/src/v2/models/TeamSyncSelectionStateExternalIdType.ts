import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of external identifier for the selection state item.
 * For GitHub synchronization, the allowed values are `team` and
 * `organization`.
 */
export type TeamSyncSelectionStateExternalIdType =
  | typeof TEAM
  | typeof ORGANIZATION
  | UnparsedObject;
export const TEAM = "team";
export const ORGANIZATION = "organization";
