import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Entity resource type.
 */
export type EntityResponseDataType = typeof ENTITY | UnparsedObject;
export const ENTITY = "entity";
