import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Name of the data source.
 */
export type TopologyQueryServiceMapDataSource =
  | typeof SERVICE_MAP
  | UnparsedObject;
export const SERVICE_MAP = "service_map";
