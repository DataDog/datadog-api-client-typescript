import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for project favorites.
 */
export type ProjectFavoriteResourceType =
  | typeof PROJECT_FAVORITE
  | UnparsedObject;
export const PROJECT_FAVORITE = "project_favorite";
