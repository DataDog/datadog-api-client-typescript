import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The custom connection type.
 */
export type CustomConnectionType = typeof CUSTOM_CONNECTIONS | UnparsedObject;
export const CUSTOM_CONNECTIONS = "custom_connections";
