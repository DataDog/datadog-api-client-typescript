import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sankey mode for network queries.
 */
export type SankeyNetworkQueryMode = typeof TARGET | UnparsedObject;
export const TARGET = "target";
