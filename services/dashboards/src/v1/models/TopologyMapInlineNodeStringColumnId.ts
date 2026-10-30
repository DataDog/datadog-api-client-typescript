import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Node field the column fills. `title` is bold text at the top of the node; `subtitle` is smaller text below it.
 */
export type TopologyMapInlineNodeStringColumnId =
  | typeof TITLE
  | typeof SUBTITLE
  | UnparsedObject;
export const TITLE = "title";
export const SUBTITLE = "subtitle";
