import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the configuration file schema resource.
 */
export type FleetConfigFileSchemaV2ResourceType =
  | typeof CONFIG_FILE_SCHEMA
  | UnparsedObject;
export const CONFIG_FILE_SCHEMA = "config_file_schema";
