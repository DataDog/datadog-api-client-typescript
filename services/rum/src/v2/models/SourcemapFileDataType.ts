import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for source map file objects.
 */
export type SourcemapFileDataType = typeof SOURCEMAP_FILES | UnparsedObject;
export const SOURCEMAP_FILES = "sourcemap_files";
