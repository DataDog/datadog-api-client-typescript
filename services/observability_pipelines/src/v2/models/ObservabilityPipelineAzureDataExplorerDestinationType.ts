import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `azure_data_explorer`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationType =
  | typeof AZURE_DATA_EXPLORER
  | UnparsedObject;
export const AZURE_DATA_EXPLORER = "azure_data_explorer";
