import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Related entity.
 */
export type EntityResponseIncludedRelatedEntityType =
  | typeof RELATED_ENTITY
  | UnparsedObject;
export const RELATED_ENTITY = "relatedEntity";
