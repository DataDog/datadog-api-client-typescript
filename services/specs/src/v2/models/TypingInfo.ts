import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SpecAttributes } from "./SpecAttributes";
import { SpecData } from "./SpecData";
import { SpecsListResponse } from "./SpecsListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SpecAttributesStatus: ["published", "draft", "deprecated"],
    SpecType: ["spec"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SpecAttributes: SpecAttributes,
    SpecData: SpecData,
    SpecsListResponse: SpecsListResponse,
  },
};
