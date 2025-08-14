import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `HTTPIntegrationType` object.
 */
export type HTTPIntegrationType = typeof HTTP | UnparsedObject;
export const HTTP = "HTTP";
