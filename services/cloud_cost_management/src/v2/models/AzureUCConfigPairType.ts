import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Azure config pair.
 */
export type AzureUCConfigPairType = typeof AZURE_UC_CONFIGS | UnparsedObject;
export const AZURE_UC_CONFIGS = "azure_uc_configs";
