import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `il2cpp` for IL2CPP source maps.
 */
export type IL2CPPSourcemapMapKind = typeof IL2CPP | UnparsedObject;
export const IL2CPP = "il2cpp";
