import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relation type.
 */
export type RelationResponseType = typeof RELATION | UnparsedObject;
export const RELATION = "relation";
