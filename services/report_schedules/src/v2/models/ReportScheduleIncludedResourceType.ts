import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for an included report resource.
 */
export type ReportScheduleIncludedResourceType =
  | typeof RESOURCE
  | UnparsedObject;
export const RESOURCE = "resource";
