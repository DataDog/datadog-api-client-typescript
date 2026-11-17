import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Use custom colors.
 */
export type HeatgridCustomColorSource = typeof CUSTOM | UnparsedObject;
export const CUSTOM = "custom";
