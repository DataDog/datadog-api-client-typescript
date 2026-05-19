import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for case types.
 */
export type CaseTypeResourceType = typeof CASE_TYPE | UnparsedObject;
export const CASE_TYPE = "case_type";
