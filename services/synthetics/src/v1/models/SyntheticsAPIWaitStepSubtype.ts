import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The subtype of the Synthetic multi-step API wait step.
 */
export type SyntheticsAPIWaitStepSubtype = typeof WAIT | UnparsedObject;
export const WAIT = "wait";
