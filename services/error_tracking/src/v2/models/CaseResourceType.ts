import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case resource type
 */
export type CaseResourceType = typeof CASE | UnparsedObject;
export const CASE = "case";
