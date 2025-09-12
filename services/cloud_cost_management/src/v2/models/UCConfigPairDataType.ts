import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Azure UC configs resource type.
 */
export type UCConfigPairDataType = typeof AZURE_UC_CONFIGS | UnparsedObject;
export const AZURE_UC_CONFIGS = "azure_uc_configs";
