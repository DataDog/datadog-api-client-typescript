import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for source map objects.
 */
export type SourcemapDataType = typeof SOURCEMAPS | UnparsedObject;
export const SOURCEMAPS = "sourcemaps";
