import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `react` for React Native source maps.
 */
export type ReactNativeSourcemapMapKind = typeof REACT | UnparsedObject;
export const REACT = "react";
