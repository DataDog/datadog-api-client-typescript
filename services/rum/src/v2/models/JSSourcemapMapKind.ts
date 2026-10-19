import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `js` for JavaScript source maps.
 */
export type JSSourcemapMapKind = typeof JS | UnparsedObject;
export const JS = "js";
