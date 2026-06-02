import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { StegadographyGetWidgetsResponse } from "./StegadographyGetWidgetsResponse";
import { StegadographyWidget } from "./StegadographyWidget";
import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    StegadographyWidgetType: ["widget"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    StegadographyGetWidgetsResponse: StegadographyGetWidgetsResponse,
    StegadographyWidget: StegadographyWidget,
    StegadographyWidgetAttributes: StegadographyWidgetAttributes,
  },
};
