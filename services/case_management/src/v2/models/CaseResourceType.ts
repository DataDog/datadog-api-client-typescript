import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for cases.
 */
export type CaseResourceType = typeof CASE | UnparsedObject;
export const CASE = "case";
