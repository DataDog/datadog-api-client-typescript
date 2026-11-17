import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The owner run-as type.
 */
export type WorkflowRunAsOwnerType = typeof OWNER | UnparsedObject;
export const OWNER = "owner";
