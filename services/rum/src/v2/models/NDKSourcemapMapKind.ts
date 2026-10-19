import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `ndk` for Android NDK source maps.
 */
export type NDKSourcemapMapKind = typeof NDK | UnparsedObject;
export const NDK = "ndk";
