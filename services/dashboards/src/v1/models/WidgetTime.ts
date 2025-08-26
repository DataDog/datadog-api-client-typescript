import { UnparsedObject } from "@datadog/datadog-api-client";

import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";
import { WidgetTimeHideIncompleteData } from "./WidgetTimeHideIncompleteData";

/**
 * Time setting for the widget.
 */
export type WidgetTime =
  | WidgetLegacyLiveSpan
  | WidgetNewLiveSpan
  | WidgetNewFixedSpan
  | WidgetTimeHideIncompleteData
  | UnparsedObject;
