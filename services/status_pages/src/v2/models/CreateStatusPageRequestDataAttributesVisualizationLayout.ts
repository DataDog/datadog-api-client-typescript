import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The layout of components on the status page. Defaults to `list`. `grid` requires `visualization_type` to be `component_name_only`; changing `visualization_type` to any other value resets the layout to `list`.
 */
export type CreateStatusPageRequestDataAttributesVisualizationLayout =
  | typeof LIST
  | typeof GRID
  | UnparsedObject;
export const LIST = "list";
export const GRID = "grid";
