import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of `WorkflowDataType` object.
 */
export type WorkflowDataType = typeof WORKFLOWS | UnparsedObject;
export const WORKFLOWS = "workflows";
