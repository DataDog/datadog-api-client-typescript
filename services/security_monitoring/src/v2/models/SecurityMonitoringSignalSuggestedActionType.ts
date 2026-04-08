import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the suggested action resource.
 */
export type SecurityMonitoringSignalSuggestedActionType =
  | typeof INVESTIGATION_LOG_QUERIES
  | typeof RECOMMENDED_BLOG_POSTS
  | UnparsedObject;
export const INVESTIGATION_LOG_QUERIES = "investigation_log_queries";
export const RECOMMENDED_BLOG_POSTS = "recommended_blog_posts";
