import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the object.
 */
export type IssueCaseResourceType = typeof CASE | UnparsedObject;
export const CASE = "case";
