import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `azure_storage`.
 */
export type AzureStorageDestinationType = typeof AZURE_STORAGE | UnparsedObject;
export const AZURE_STORAGE = "azure_storage";
