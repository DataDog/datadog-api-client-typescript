import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `flutter` for Flutter source maps.
 */
export type FlutterSourcemapMapKind = typeof FLUTTER | UnparsedObject;
export const FLUTTER = "flutter";
