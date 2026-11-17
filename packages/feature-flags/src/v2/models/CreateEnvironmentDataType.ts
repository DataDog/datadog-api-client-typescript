import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type.
 */
export type CreateEnvironmentDataType = typeof ENVIRONMENTS | UnparsedObject;
export const ENVIRONMENTS = "environments";
