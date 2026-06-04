/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ELFSourcemapData } from "./ELFSourcemapData";
import { FlutterSourcemapData } from "./FlutterSourcemapData";
import { IL2CPPSourcemapData } from "./IL2CPPSourcemapData";
import { IOSSourcemapData } from "./IOSSourcemapData";
import { JSSourcemapData } from "./JSSourcemapData";
import { JVMSourcemapData } from "./JVMSourcemapData";
import { NDKSourcemapData } from "./NDKSourcemapData";
import { ReactNativeSourcemapData } from "./ReactNativeSourcemapData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A source map data object representing one of the supported map kinds.
 */

export type SourcemapItem =
  | JSSourcemapData
  | ReactNativeSourcemapData
  | IOSSourcemapData
  | JVMSourcemapData
  | FlutterSourcemapData
  | ELFSourcemapData
  | NDKSourcemapData
  | IL2CPPSourcemapData
  | UnparsedObject;
