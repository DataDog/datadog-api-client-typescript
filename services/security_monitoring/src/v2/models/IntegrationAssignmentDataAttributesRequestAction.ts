import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action to perform on the assignment. Can be "assign" or "un_assign".
 */
export type IntegrationAssignmentDataAttributesRequestAction =
  | typeof ASSIGN
  | typeof UN_ASSIGN
  | UnparsedObject;
export const ASSIGN = "assign";
export const UN_ASSIGN = "un_assign";
