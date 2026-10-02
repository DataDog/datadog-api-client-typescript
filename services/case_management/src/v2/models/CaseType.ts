import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Work item type
 */
export type CaseType = typeof STANDARD | UnparsedObject;
export const STANDARD = "STANDARD";
