import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { HamrOrgConnectionAttributesRequest } from "./HamrOrgConnectionAttributesRequest";
import { HamrOrgConnectionAttributesResponse } from "./HamrOrgConnectionAttributesResponse";
import { HamrOrgConnectionDataRequest } from "./HamrOrgConnectionDataRequest";
import { HamrOrgConnectionDataResponse } from "./HamrOrgConnectionDataResponse";
import { HamrOrgConnectionRequest } from "./HamrOrgConnectionRequest";
import { HamrOrgConnectionResponse } from "./HamrOrgConnectionResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    HamrOrgConnectionStatus: [0, 1, 2, 3, 4, 5],
    HamrOrgConnectionType: ["hamr_org_connections"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    HamrOrgConnectionAttributesRequest: HamrOrgConnectionAttributesRequest,
    HamrOrgConnectionAttributesResponse: HamrOrgConnectionAttributesResponse,
    HamrOrgConnectionDataRequest: HamrOrgConnectionDataRequest,
    HamrOrgConnectionDataResponse: HamrOrgConnectionDataResponse,
    HamrOrgConnectionRequest: HamrOrgConnectionRequest,
    HamrOrgConnectionResponse: HamrOrgConnectionResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
