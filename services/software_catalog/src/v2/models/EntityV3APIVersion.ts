import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The schema version of entity type. The field is known as schema-version in the previous version.
 */
export type EntityV3APIVersion = typeof V3 | UnparsedObject;
export const V3 = "v3";
