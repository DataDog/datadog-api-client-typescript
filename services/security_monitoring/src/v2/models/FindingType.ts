import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for findings.
 */
export type FindingType = typeof FINDING | UnparsedObject;
export const FINDING = "finding";
