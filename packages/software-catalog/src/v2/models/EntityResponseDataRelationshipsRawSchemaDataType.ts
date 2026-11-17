import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Raw schema resource type.
 */
export type EntityResponseDataRelationshipsRawSchemaDataType =
  | typeof RAWSCHEMA
  | UnparsedObject;
export const RAWSCHEMA = "rawSchema";
