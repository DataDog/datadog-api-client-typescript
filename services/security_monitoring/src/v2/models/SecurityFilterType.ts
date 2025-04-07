import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `security_filters`.
 */
export type SecurityFilterType = typeof SECURITY_FILTERS | UnparsedObject;
export const SECURITY_FILTERS = "security_filters";
