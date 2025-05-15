import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreatePageRequest } from "./CreatePageRequest";
import { CreatePageRequestData } from "./CreatePageRequestData";
import { CreatePageRequestDataAttributes } from "./CreatePageRequestDataAttributes";
import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";
import { CreatePageResponse } from "./CreatePageResponse";
import { CreatePageResponseData } from "./CreatePageResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreatePageRequestDataType: ["pages"],
    CreatePageResponseDataType: ["pages"],
    PageUrgency: ["low", "high"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreatePageRequest: CreatePageRequest,
    CreatePageRequestData: CreatePageRequestData,
    CreatePageRequestDataAttributes: CreatePageRequestDataAttributes,
    CreatePageRequestDataAttributesTarget:
      CreatePageRequestDataAttributesTarget,
    CreatePageResponse: CreatePageResponse,
    CreatePageResponseData: CreatePageResponseData,
  },
};
