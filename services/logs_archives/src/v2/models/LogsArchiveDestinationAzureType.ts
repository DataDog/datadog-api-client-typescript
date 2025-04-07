import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Azure archive destination.
 */
export type LogsArchiveDestinationAzureType = typeof AZURE | UnparsedObject;
export const AZURE = "azure";
