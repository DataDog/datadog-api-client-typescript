import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of `HTTPIntegrationType` object.
 */
export type HTTPIntegrationType = typeof HTTP | UnparsedObject;
export const HTTP = "HTTP";
