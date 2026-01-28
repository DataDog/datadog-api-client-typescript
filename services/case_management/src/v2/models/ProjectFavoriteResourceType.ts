import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Project favorite resource type
 */
export type ProjectFavoriteResourceType =
  | typeof PROJECT_FAVORITE
  | UnparsedObject;
export const PROJECT_FAVORITE = "project_favorite";
