import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Network data source type.
 */
export type SankeyNetworkDataSource =
  | typeof NETWORK_DEVICE_FLOWS
  | typeof NETWORK
  | UnparsedObject;
export const NETWORK_DEVICE_FLOWS = "network_device_flows";
export const NETWORK = "network";
