import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ImageSizing =
  | typeof NONE
  | typeof CENTER
  | typeof FILL
  | typeof CONTAIN
  | typeof COVER
  | typeof SCALE_DOWN
  | typeof ZOOM
  | typeof FIT
  | UnparsedObject;
export const NONE = "none";
export const CENTER = "center";
export const FILL = "fill";
export const CONTAIN = "contain";
export const COVER = "cover";
export const SCALE_DOWN = "scale-down";
export const ZOOM = "zoom";
export const FIT = "fit";
