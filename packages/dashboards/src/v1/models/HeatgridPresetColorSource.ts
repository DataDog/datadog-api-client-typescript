import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Use a preset color palette.
 */
export type HeatgridPresetColorSource = typeof PRESET | UnparsedObject;
export const PRESET = "preset";
