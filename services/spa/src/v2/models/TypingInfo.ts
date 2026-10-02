import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ComponentRecommendation } from "./ComponentRecommendation";
import { Cpu } from "./Cpu";
import { Estimation } from "./Estimation";
import { RecommendationAttributes } from "./RecommendationAttributes";
import { RecommendationData } from "./RecommendationData";
import { RecommendationDocument } from "./RecommendationDocument";
import { RecommendationV2RequestAttributes } from "./RecommendationV2RequestAttributes";
import { RecommendationV2RequestBody } from "./RecommendationV2RequestBody";
import { RecommendationV2RequestData } from "./RecommendationV2RequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RecommendationType: ["recommendation"],
    RecommendationV2RequestType: ["recommendation_v2_request"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ComponentRecommendation: ComponentRecommendation,
    Cpu: Cpu,
    Estimation: Estimation,
    RecommendationAttributes: RecommendationAttributes,
    RecommendationData: RecommendationData,
    RecommendationDocument: RecommendationDocument,
    RecommendationV2RequestAttributes: RecommendationV2RequestAttributes,
    RecommendationV2RequestBody: RecommendationV2RequestBody,
    RecommendationV2RequestData: RecommendationV2RequestData,
  },
};
