import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Layers resource type.
 */
export type LayerType = typeof LAYERS | UnparsedObject;
export const LAYERS = "layers";
