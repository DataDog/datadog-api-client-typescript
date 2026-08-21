import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a scope narrowed to one grid cell.
 */
export type ProductAnalyticsRetentionCellScopeType =
  | typeof CELL
  | UnparsedObject;
export const CELL = "cell";
