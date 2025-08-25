import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ComponentRecommendation } from "./ComponentRecommendation";
import { Cpu } from "./Cpu";
import { Estimation } from "./Estimation";
import { RecommendationAttributes } from "./RecommendationAttributes";
import { RecommendationData } from "./RecommendationData";
import { RecommendationDocument } from "./RecommendationDocument";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RecommendationType: ["recommendation"],
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
  },
};
