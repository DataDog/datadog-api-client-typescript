import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The cloud asset type
 */
export type CloudAssetType =
  | typeof HOST
  | typeof HOST_IMAGE
  | typeof IMAGE
  | UnparsedObject;
export const HOST = "Host";
export const HOST_IMAGE = "HostImage";
export const IMAGE = "Image";
