import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for a serialized regex. Always `regex`.
 */
export type RumSdkConfigSerializedRegexType = typeof REGEX | UnparsedObject;
export const REGEX = "regex";
