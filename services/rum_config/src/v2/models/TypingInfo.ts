import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumConfigAttributes } from "./RumConfigAttributes";
import { RumConfigCreateAttributes } from "./RumConfigCreateAttributes";
import { RumConfigCreateData } from "./RumConfigCreateData";
import { RumConfigCreateRequest } from "./RumConfigCreateRequest";
import { RumConfigData } from "./RumConfigData";
import { RumConfigResponse } from "./RumConfigResponse";
import { RumConfigUpdateAttributes } from "./RumConfigUpdateAttributes";
import { RumConfigUpdateData } from "./RumConfigUpdateData";
import { RumConfigUpdateRequest } from "./RumConfigUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumConfigType: ["rum_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumConfigAttributes: RumConfigAttributes,
    RumConfigCreateAttributes: RumConfigCreateAttributes,
    RumConfigCreateData: RumConfigCreateData,
    RumConfigCreateRequest: RumConfigCreateRequest,
    RumConfigData: RumConfigData,
    RumConfigResponse: RumConfigResponse,
    RumConfigUpdateAttributes: RumConfigUpdateAttributes,
    RumConfigUpdateData: RumConfigUpdateData,
    RumConfigUpdateRequest: RumConfigUpdateRequest,
  },
};
