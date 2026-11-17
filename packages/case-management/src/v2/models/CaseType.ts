import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Work item type
 */
export type CaseType = typeof STANDARD | UnparsedObject;
export const STANDARD = "STANDARD";
