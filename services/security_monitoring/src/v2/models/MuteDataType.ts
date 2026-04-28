import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Mute resource type.
 */
export type MuteDataType = typeof MUTE | UnparsedObject;
export const MUTE = "mute";
