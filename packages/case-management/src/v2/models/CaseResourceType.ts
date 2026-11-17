import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for work items.
 */
export type CaseResourceType = typeof CASE | UnparsedObject;
export const CASE = "case";
