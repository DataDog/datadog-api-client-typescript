import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The initiator run-as type.
 */
export type WorkflowRunAsInitiatorType = typeof INITIATOR | UnparsedObject;
export const INITIATOR = "initiator";
