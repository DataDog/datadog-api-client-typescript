import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type.
 */
export type ScannedAssetMetadataType =
  | typeof SCANNED_ASSETS_METADATA
  | UnparsedObject;
export const SCANNED_ASSETS_METADATA = "scanned-assets-metadata";
