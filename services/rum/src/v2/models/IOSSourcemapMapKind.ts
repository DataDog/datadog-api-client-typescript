import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `ios` for iOS dSYM source maps.
 */
export type IOSSourcemapMapKind = typeof IOS | UnparsedObject;
export const IOS = "ios";
