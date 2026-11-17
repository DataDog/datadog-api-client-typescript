import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The root schema type.
 */
export type FormDataDefinitionType = typeof OBJECT | UnparsedObject;
export const OBJECT = "object";
