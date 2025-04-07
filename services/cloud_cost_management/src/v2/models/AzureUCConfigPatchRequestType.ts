import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Azure config Patch Request.
 */
export type AzureUCConfigPatchRequestType =
  | typeof AZURE_UC_CONFIG_PATCH_REQUEST
  | UnparsedObject;
export const AZURE_UC_CONFIG_PATCH_REQUEST = "azure_uc_config_patch_request";
