import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Use custom colors.
 */
export type HeatgridCustomColorSource = typeof CUSTOM | UnparsedObject;
export const CUSTOM = "custom";
