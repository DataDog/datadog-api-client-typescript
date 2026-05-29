import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Visual dimension driven by a formula in the infrastructure host map widget.
 */
export type HostMapWidgetDimension =
  | typeof NODE
  | typeof FILL
  | typeof SIZE
  | UnparsedObject;
export const NODE = "node";
export const FILL = "fill";
export const SIZE = "size";
