import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreatePageRequest } from "./CreatePageRequest";
import { CreatePageRequestData } from "./CreatePageRequestData";
import { CreatePageRequestDataAttributes } from "./CreatePageRequestDataAttributes";
import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";
import { CreatePageResponse } from "./CreatePageResponse";
import { CreatePageResponseData } from "./CreatePageResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RerouteOnCallPageRequest } from "./RerouteOnCallPageRequest";
import { RerouteOnCallPageRequestData } from "./RerouteOnCallPageRequestData";
import { RerouteOnCallPageRequestDataAttributes } from "./RerouteOnCallPageRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreatePageRequestDataType: ["pages"],
    CreatePageResponseDataType: ["pages"],
    OnCallPageTargetType: ["team_id", "team_handle", "user_id"],
    PageUrgency: ["low", "high"],
    RerouteOnCallPageRequestDataType: ["reroute"],
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RerouteOnCallPageRequest: RerouteOnCallPageRequest,
    RerouteOnCallPageRequestData: RerouteOnCallPageRequestData,
    RerouteOnCallPageRequestDataAttributes:
      RerouteOnCallPageRequestDataAttributes,
  },
};
