import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the spec resource.
 */
export type SpecType = typeof SPEC | UnparsedObject;
export const SPEC = "spec";
