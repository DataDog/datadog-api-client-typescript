import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Visual dimension for the host map widget. Used both by infrastructure-backed formulas and by DDSQL projection columns; `group` is only meaningful for DDSQL projection columns, where repeated entries define the grouping hierarchy.
 */
export type HostMapWidgetDimension =
  | typeof NODE
  | typeof FILL
  | typeof SIZE
  | typeof GROUP
  | UnparsedObject;
export const NODE = "node";
export const FILL = "fill";
export const SIZE = "size";
export const GROUP = "group";
