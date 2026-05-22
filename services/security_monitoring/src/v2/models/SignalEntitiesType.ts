import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `entities`.
 */
export type SignalEntitiesType = typeof ENTITIES | UnparsedObject;
export const ENTITIES = "entities";
