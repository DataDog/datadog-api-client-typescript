import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Overview items resource type.
 */
export type OverviewItemDataType = typeof OVERVIEW_ITEMS | UnparsedObject;
export const OVERVIEW_ITEMS = "overview_items";
