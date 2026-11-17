import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for source map objects.
 */
export type SourcemapDataType = typeof SOURCEMAPS | UnparsedObject;
export const SOURCEMAPS = "sourcemaps";
