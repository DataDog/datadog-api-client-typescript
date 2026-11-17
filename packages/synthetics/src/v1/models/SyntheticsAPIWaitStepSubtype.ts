import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The subtype of the Synthetic multi-step API wait step.
 */
export type SyntheticsAPIWaitStepSubtype = typeof WAIT | UnparsedObject;
export const WAIT = "wait";
