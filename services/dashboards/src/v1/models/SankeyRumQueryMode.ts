import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sankey mode for RUM queries.
 */
export type SankeyRumQueryMode = typeof SOURCE | typeof TARGET | UnparsedObject;
export const SOURCE = "source";
export const TARGET = "target";
