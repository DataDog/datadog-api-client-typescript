import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `WorkflowUserRelationshipType` object.
 */
export type WorkflowUserRelationshipType = typeof USERS | UnparsedObject;
export const USERS = "users";
