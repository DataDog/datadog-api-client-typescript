import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of AI memory violation result indicating whether it is a true positive or false positive.
 */
export type AiMemoryViolationType = typeof TP | typeof FP | UnparsedObject;
export const TP = "TP";
export const FP = "FP";
