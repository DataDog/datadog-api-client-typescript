import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of the data source
 */
export type TopologyQueryDataSource =
  | typeof DATA_STREAMS
  | typeof SERVICE_MAP
  | UnparsedObject;
export const DATA_STREAMS = "data_streams";
export const SERVICE_MAP = "service_map";
