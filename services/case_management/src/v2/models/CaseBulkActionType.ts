import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of action to apply in a bulk update. Allowed values are `priority`, `status`, `assign`, `unassign`, `archive`, `unarchive`, `jira`, `servicenow`, `linear`, `update_project`.
 */
export type CaseBulkActionType =
  | typeof PRIORITY
  | typeof STATUS
  | typeof ASSIGN
  | typeof UNASSIGN
  | typeof ARCHIVE
  | typeof UNARCHIVE
  | typeof JIRA
  | typeof SERVICENOW
  | typeof LINEAR
  | typeof UPDATE_PROJECT
  | UnparsedObject;
export const PRIORITY = "priority";
export const STATUS = "status";
export const ASSIGN = "assign";
export const UNASSIGN = "unassign";
export const ARCHIVE = "archive";
export const UNARCHIVE = "unarchive";
export const JIRA = "jira";
export const SERVICENOW = "servicenow";
export const LINEAR = "linear";
export const UPDATE_PROJECT = "update_project";
