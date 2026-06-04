/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
