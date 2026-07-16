import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of the data source.
 */
export type TopologyQueryDataStreamsDataSource =
  | typeof DATA_STREAMS
  | UnparsedObject;
export const DATA_STREAMS = "data_streams";
