import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The root schema type.
 */
export type FormDataDefinitionType = typeof OBJECT | UnparsedObject;
export const OBJECT = "object";
