import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for bulk work item operations.
 */
export type CaseBulkResourceType = typeof BULK | UnparsedObject;
export const BULK = "bulk";
