import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";
import { StegadographyWidgetData } from "./StegadographyWidgetData";
import { StegadographyWidgetsResponse } from "./StegadographyWidgetsResponse";

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
    StegadographyWidgetAttributes: StegadographyWidgetAttributes,
    StegadographyWidgetData: StegadographyWidgetData,
    StegadographyWidgetsResponse: StegadographyWidgetsResponse,
  },
};
