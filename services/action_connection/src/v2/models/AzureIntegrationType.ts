import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `AzureIntegrationType` object.
 */
export type AzureIntegrationType = typeof AZURE | UnparsedObject;
export const AZURE = "Azure";
