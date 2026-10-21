import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of external identifier for the selection state item.
 * For GitHub synchronization, `team` refers to a GitHub team and
 * `organization` refers to a GitHub organization. For ServiceNow
 * synchronization, `team` refers to a ServiceNow group and
 * `organization` refers to a ServiceNow instance.
 */
export type TeamSyncSelectionStateExternalIdType =
  | typeof TEAM
  | typeof ORGANIZATION
  | UnparsedObject;
export const TEAM = "team";
export const ORGANIZATION = "organization";
