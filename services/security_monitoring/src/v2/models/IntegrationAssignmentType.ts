import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration assignment resource type.
 */
export type IntegrationAssignmentType =
  | typeof ISSUE_ASSIGNMENT
  | UnparsedObject;
export const ISSUE_ASSIGNMENT = "issue_assignment";
