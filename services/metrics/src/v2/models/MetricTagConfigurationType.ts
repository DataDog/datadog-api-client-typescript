import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric tag configuration resource type.
 */
export type MetricTagConfigurationType = typeof MANAGE_TAGS | UnparsedObject;
export const MANAGE_TAGS = "manage_tags";
