import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Display groups as flat rows.
 */
export type HeatgridNestingDisplay = typeof FLAT | UnparsedObject;
export const FLAT = "flat";
