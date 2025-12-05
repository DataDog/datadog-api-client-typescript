import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FunnelRequest } from "./FunnelRequest";
import { FunnelRequestData } from "./FunnelRequestData";
import { FunnelRequestDataAttributes } from "./FunnelRequestDataAttributes";
import { FunnelRequestDataAttributesSearch } from "./FunnelRequestDataAttributesSearch";
import { FunnelRequestDataAttributesSearchStepsItems } from "./FunnelRequestDataAttributesSearchStepsItems";
import { FunnelRequestDataAttributesTime } from "./FunnelRequestDataAttributesTime";
import { FunnelResponse } from "./FunnelResponse";
import { FunnelResponseData } from "./FunnelResponseData";
import { FunnelResponseDataAttributes } from "./FunnelResponseDataAttributes";
import { FunnelResponseDataAttributesFunnelStepsItems } from "./FunnelResponseDataAttributesFunnelStepsItems";
import { FunnelResponseElapsedTime } from "./FunnelResponseElapsedTime";
import { FunnelSuggestionRequest } from "./FunnelSuggestionRequest";
import { FunnelSuggestionRequestData } from "./FunnelSuggestionRequestData";
import { FunnelSuggestionRequestDataAttributes } from "./FunnelSuggestionRequestDataAttributes";
import { FunnelSuggestionRequestDataAttributesSearch } from "./FunnelSuggestionRequestDataAttributesSearch";
import { FunnelSuggestionRequestDataAttributesSearchStepsItems } from "./FunnelSuggestionRequestDataAttributesSearchStepsItems";
import { FunnelSuggestionRequestDataAttributesTermSearch } from "./FunnelSuggestionRequestDataAttributesTermSearch";
import { FunnelSuggestionRequestDataAttributesTime } from "./FunnelSuggestionRequestDataAttributesTime";
import { FunnelSuggestionResponse } from "./FunnelSuggestionResponse";
import { FunnelSuggestionResponseData } from "./FunnelSuggestionResponseData";
import { FunnelSuggestionResponseDataAttributes } from "./FunnelSuggestionResponseDataAttributes";
import { FunnelSuggestionResponseDataAttributesActionsItems } from "./FunnelSuggestionResponseDataAttributesActionsItems";
import { FunnelSuggestionResponseDataAttributesViewsItems } from "./FunnelSuggestionResponseDataAttributesViewsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FunnelRequestDataType: ["funnel_request"],
    FunnelResponseDataType: ["funnel_response"],
    FunnelSuggestionRequestDataType: ["funnel_suggestion_request"],
    FunnelSuggestionResponseDataType: ["funnel_suggestion_response"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FunnelRequest: FunnelRequest,
    FunnelRequestData: FunnelRequestData,
    FunnelRequestDataAttributes: FunnelRequestDataAttributes,
    FunnelRequestDataAttributesSearch: FunnelRequestDataAttributesSearch,
    FunnelRequestDataAttributesSearchStepsItems:
      FunnelRequestDataAttributesSearchStepsItems,
    FunnelRequestDataAttributesTime: FunnelRequestDataAttributesTime,
    FunnelResponse: FunnelResponse,
    FunnelResponseData: FunnelResponseData,
    FunnelResponseDataAttributes: FunnelResponseDataAttributes,
    FunnelResponseDataAttributesFunnelStepsItems:
      FunnelResponseDataAttributesFunnelStepsItems,
    FunnelResponseElapsedTime: FunnelResponseElapsedTime,
    FunnelSuggestionRequest: FunnelSuggestionRequest,
    FunnelSuggestionRequestData: FunnelSuggestionRequestData,
    FunnelSuggestionRequestDataAttributes:
      FunnelSuggestionRequestDataAttributes,
    FunnelSuggestionRequestDataAttributesSearch:
      FunnelSuggestionRequestDataAttributesSearch,
    FunnelSuggestionRequestDataAttributesSearchStepsItems:
      FunnelSuggestionRequestDataAttributesSearchStepsItems,
    FunnelSuggestionRequestDataAttributesTermSearch:
      FunnelSuggestionRequestDataAttributesTermSearch,
    FunnelSuggestionRequestDataAttributesTime:
      FunnelSuggestionRequestDataAttributesTime,
    FunnelSuggestionResponse: FunnelSuggestionResponse,
    FunnelSuggestionResponseData: FunnelSuggestionResponseData,
    FunnelSuggestionResponseDataAttributes:
      FunnelSuggestionResponseDataAttributes,
    FunnelSuggestionResponseDataAttributesActionsItems:
      FunnelSuggestionResponseDataAttributesActionsItems,
    FunnelSuggestionResponseDataAttributesViewsItems:
      FunnelSuggestionResponseDataAttributesViewsItems,
  },
};
