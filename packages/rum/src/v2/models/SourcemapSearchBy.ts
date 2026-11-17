import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The search mode for listing JavaScript source maps.
 */
export type SourcemapSearchBy = typeof DEBUG_ID | UnparsedObject;
export const DEBUG_ID = "debug_id";
