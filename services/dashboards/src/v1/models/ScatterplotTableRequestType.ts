import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the scatterplot table request.
 */
export type ScatterplotTableRequestType =
  | typeof TABLE
  | typeof DATA_PROJECTION
  | UnparsedObject;
export const TABLE = "table";
export const DATA_PROJECTION = "data_projection";
