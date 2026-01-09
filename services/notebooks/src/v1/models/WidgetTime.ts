import { UnparsedObject } from "@datadog/datadog-api-client";

import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";

/**
 * Time setting for the widget.
 */
export type WidgetTime =
  | WidgetNewLiveSpan
  | WidgetNewFixedSpan
  | WidgetLegacyLiveSpan
  | UnparsedObject;
