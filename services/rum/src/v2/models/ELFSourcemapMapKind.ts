import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `elf` for ELF source maps.
 */
export type ELFSourcemapMapKind = typeof ELF | UnparsedObject;
export const ELF = "elf";
