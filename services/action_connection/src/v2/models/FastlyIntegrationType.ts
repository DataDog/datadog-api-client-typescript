import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `FastlyIntegrationType` object.
 */
export type FastlyIntegrationType = typeof FASTLY | UnparsedObject;
export const FASTLY = "Fastly";
