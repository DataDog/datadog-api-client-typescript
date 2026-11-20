import { UnparsedObject } from "@datadog/datadog-api-client";

import { WidgetTime20270101OneOf } from "./WidgetTime20270101OneOf";
import { WidgetTime20270101OneOf4464103552 } from "./WidgetTime20270101OneOf4464103552";
import { WidgetTime20270101OneOf4464104512 } from "./WidgetTime20270101OneOf4464104512";
import { WidgetTime20270101OneOf4464105312 } from "./WidgetTime20270101OneOf4464105312";
import { WidgetTime20270101OneOf4464105952 } from "../../v1/models/WidgetTime20270101OneOf4464105952";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetTime =
  | WidgetTime20270101OneOf
  | WidgetTime20270101OneOf4464103552
  | WidgetTime20270101OneOf4464104512
  | WidgetTime20270101OneOf4464105312
  | WidgetTime20270101OneOf4464105952
  | any
  | UnparsedObject;
