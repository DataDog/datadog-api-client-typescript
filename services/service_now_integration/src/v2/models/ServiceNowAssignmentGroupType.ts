import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for ServiceNow assignment group resources
 */
export type ServiceNowAssignmentGroupType =
  | typeof ASSIGNMENT_GROUPS
  | UnparsedObject;
export const ASSIGNMENT_GROUPS = "assignment_groups";
