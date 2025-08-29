import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case type
 */
export type CaseType = typeof STANDARD | UnparsedObject;
export const STANDARD = "STANDARD";
