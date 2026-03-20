import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type.
 */
export type UpdateEnvironmentDataType = typeof ENVIRONMENTS | UnparsedObject;
export const ENVIRONMENTS = "environments";
