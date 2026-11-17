import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Schema type.
 */
export type EntityResponseIncludedSchemaType = typeof SCHEMA | UnparsedObject;
export const SCHEMA = "schema";
