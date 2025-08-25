import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case type
 */
export type CaseType = typeof STANDARD | typeof TUNKNOWN | UnparsedObject;
export const STANDARD = "STANDARD";
export const TUNKNOWN = "TUNKNOWN";
