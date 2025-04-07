import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Azure config Post Request.
 */
export type AzureUCConfigPostRequestType =
  | typeof AZURE_UC_CONFIG_POST_REQUEST
  | UnparsedObject;
export const AZURE_UC_CONFIG_POST_REQUEST = "azure_uc_config_post_request";
