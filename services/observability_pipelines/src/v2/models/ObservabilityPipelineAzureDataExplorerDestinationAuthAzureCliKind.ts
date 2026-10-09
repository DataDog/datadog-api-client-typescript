import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `azure_cli`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCliKind =
  | typeof AZURE_CLI
  | UnparsedObject;
export const AZURE_CLI = "azure_cli";
