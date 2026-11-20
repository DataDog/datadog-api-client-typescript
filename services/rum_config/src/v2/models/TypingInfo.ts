import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RUMConfigAttributes } from "./RUMConfigAttributes";
import { RUMConfigCreateAttributes } from "./RUMConfigCreateAttributes";
import { RUMConfigCreateData } from "./RUMConfigCreateData";
import { RUMConfigCreateRequest } from "./RUMConfigCreateRequest";
import { RUMConfigData } from "./RUMConfigData";
import { RUMConfigResponse } from "./RUMConfigResponse";
import { RUMConfigUpdateAttributes } from "./RUMConfigUpdateAttributes";
import { RUMConfigUpdateData } from "./RUMConfigUpdateData";
import { RUMConfigUpdateRequest } from "./RUMConfigUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMConfigType: ["rum_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RUMConfigAttributes: RUMConfigAttributes,
    RUMConfigCreateAttributes: RUMConfigCreateAttributes,
    RUMConfigCreateData: RUMConfigCreateData,
    RUMConfigCreateRequest: RUMConfigCreateRequest,
    RUMConfigData: RUMConfigData,
    RUMConfigResponse: RUMConfigResponse,
    RUMConfigUpdateAttributes: RUMConfigUpdateAttributes,
    RUMConfigUpdateData: RUMConfigUpdateData,
    RUMConfigUpdateRequest: RUMConfigUpdateRequest,
  },
};
