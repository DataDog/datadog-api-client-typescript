import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map.
 */
export type SourcemapMapKind =
  | typeof JS
  | typeof JVM
  | typeof IOS
  | typeof REACT
  | typeof FLUTTER
  | typeof ELF
  | typeof NDK
  | typeof IL2CPP
  | UnparsedObject;
export const JS = "js";
export const JVM = "jvm";
export const IOS = "ios";
export const REACT = "react";
export const FLUTTER = "flutter";
export const ELF = "elf";
export const NDK = "ndk";
export const IL2CPP = "il2cpp";
