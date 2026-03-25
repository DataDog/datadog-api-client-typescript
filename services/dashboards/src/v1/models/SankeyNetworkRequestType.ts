import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of request for network Sankey widget.
 */
export type SankeyNetworkRequestType = typeof NETFLOW_SANKEY | UnparsedObject;
export const NETFLOW_SANKEY = "netflow_sankey";
