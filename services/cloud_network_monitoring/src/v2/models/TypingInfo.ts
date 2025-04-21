import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SingleAggregatedConnectionResponseArray } from "./SingleAggregatedConnectionResponseArray";
import { SingleAggregatedConnectionResponseData } from "./SingleAggregatedConnectionResponseData";
import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SingleAggregatedConnectionResponseDataType: ["aggregated_connection"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SingleAggregatedConnectionResponseArray:
      SingleAggregatedConnectionResponseArray,
    SingleAggregatedConnectionResponseData:
      SingleAggregatedConnectionResponseData,
    SingleAggregatedConnectionResponseDataAttributes:
      SingleAggregatedConnectionResponseDataAttributes,
  },
};
