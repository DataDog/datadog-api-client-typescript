import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for case aggregation requests.
 */
export type CaseAggregateResourceType = typeof AGGREGATE | UnparsedObject;
export const AGGREGATE = "aggregate";
