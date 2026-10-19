import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `jvm` for JVM source maps.
 */
export type JVMSourcemapMapKind = typeof JVM | UnparsedObject;
export const JVM = "jvm";
