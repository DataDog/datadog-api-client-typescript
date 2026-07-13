import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Storage tier to query.
 */
export type ScatterplotDataProjectionQueryStorage =
  | typeof LIVE
  | typeof HOT
  | typeof HABANERO
  | typeof ONLINE_ARCHIVES
  | typeof DRIVELINE
  | typeof FLEX_TIER
  | typeof CASE_INSENSITIVE
  | typeof CLOUD_PREM
  | UnparsedObject;
export const LIVE = "live";
export const HOT = "hot";
export const HABANERO = "habanero";
export const ONLINE_ARCHIVES = "online_archives";
export const DRIVELINE = "driveline";
export const FLEX_TIER = "flex_tier";
export const CASE_INSENSITIVE = "case_insensitive";
export const CLOUD_PREM = "cloud_prem";
