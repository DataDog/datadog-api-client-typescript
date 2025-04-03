import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * (deprecated) The attribute formerly used to determine size in the widget.
 */
export type TreeMapSizeBy = typeof PCT_CPU | typeof PCT_MEM | UnparsedObject;
export const PCT_CPU = "pct_cpu";
export const PCT_MEM = "pct_mem";
