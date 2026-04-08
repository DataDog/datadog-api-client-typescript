/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the suggested action resource.
 */

export type SecurityMonitoringSignalSuggestedActionType =
  | typeof INVESTIGATION_LOG_QUERIES
  | typeof RECOMMENDED_BLOG_POSTS
  | UnparsedObject;
export const INVESTIGATION_LOG_QUERIES = "investigation_log_queries";
export const RECOMMENDED_BLOG_POSTS = "recommended_blog_posts";
