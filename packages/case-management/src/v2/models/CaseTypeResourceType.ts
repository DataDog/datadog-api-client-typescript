import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for work item types.
 */
export type CaseTypeResourceType = typeof CASE_TYPE | UnparsedObject;
export const CASE_TYPE = "case_type";
