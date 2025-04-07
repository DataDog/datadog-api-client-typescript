import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The asset type
 */
export type AssetType =
  | typeof REPOSITORY
  | typeof SERVICE
  | typeof HOST
  | typeof HOSTIMAGE
  | typeof IMAGE
  | UnparsedObject;
export const REPOSITORY = "Repository";
export const SERVICE = "Service";
export const HOST = "Host";
export const HOSTIMAGE = "HostImage";
export const IMAGE = "Image";
