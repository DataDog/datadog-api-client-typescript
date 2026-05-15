import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The favorite resource type.
 */
export type AppFavoriteType = typeof FAVORITES | UnparsedObject;
export const FAVORITES = "favorites";
