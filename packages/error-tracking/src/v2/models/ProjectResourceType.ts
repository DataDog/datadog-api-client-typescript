import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Project resource type.
 */
export type ProjectResourceType = typeof PROJECT | UnparsedObject;
export const PROJECT = "project";
