import { UnparsedObject } from "@datadog/datadog-api-client";

import { ELFSourcemapData } from "./ELFSourcemapData";
import { FlutterSourcemapData } from "./FlutterSourcemapData";
import { IL2CPPSourcemapData } from "./IL2CPPSourcemapData";
import { IOSSourcemapData } from "./IOSSourcemapData";
import { JSSourcemapData } from "./JSSourcemapData";
import { JVMSourcemapData } from "./JVMSourcemapData";
import { NDKSourcemapData } from "./NDKSourcemapData";
import { PortablePdbSourcemapData } from "./PortablePdbSourcemapData";
import { ReactNativeSourcemapData } from "./ReactNativeSourcemapData";
import { WASMSourcemapData } from "./WASMSourcemapData";

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
  | WASMSourcemapData
  | PortablePdbSourcemapData
  | UnparsedObject;
