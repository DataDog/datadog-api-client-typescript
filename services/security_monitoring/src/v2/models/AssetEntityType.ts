import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type.
 */
export type AssetEntityType = typeof ASSETS | UnparsedObject;
export const ASSETS = "assets";
