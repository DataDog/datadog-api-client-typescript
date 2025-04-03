import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies storage type as indexes, online-archives or flex
 */
export type LogsStorageTier =
  | typeof INDEXES
  | typeof ONLINE_ARCHIVES
  | typeof FLEX
  | UnparsedObject;
export const INDEXES = "indexes";
export const ONLINE_ARCHIVES = "online-archives";
export const FLEX = "flex";
