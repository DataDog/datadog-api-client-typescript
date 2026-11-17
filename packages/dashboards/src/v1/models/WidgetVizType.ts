import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Whether to display the Alert Graph as a timeseries or a top list.
 */
export type WidgetVizType = typeof TIMESERIES | typeof TOPLIST | UnparsedObject;
export const TIMESERIES = "timeseries";
export const TOPLIST = "toplist";
