import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Entity resource type.
 */
export type EntityResponseDataType = typeof ENTITY | UnparsedObject;
export const ENTITY = "entity";
