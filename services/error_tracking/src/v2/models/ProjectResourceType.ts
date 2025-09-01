import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Project resource type
 */
export type ProjectResourceType = typeof PROJECT | UnparsedObject;
export const PROJECT = "project";
