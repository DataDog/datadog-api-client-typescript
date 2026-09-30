import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of entity to retrieve. Only `siem_entity_identity` is currently supported.
 */
export type EntityContextEntityType =
  | typeof SIEM_ENTITY_IDENTITY
  | UnparsedObject;
export const SIEM_ENTITY_IDENTITY = "siem_entity_identity";
