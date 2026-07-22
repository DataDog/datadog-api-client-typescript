import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CustomerOrgDisableRequest } from "./CustomerOrgDisableRequest";
import { CustomerOrgDisableRequestAttributes } from "./CustomerOrgDisableRequestAttributes";
import { CustomerOrgDisableRequestData } from "./CustomerOrgDisableRequestData";
import { CustomerOrgDisableResponse } from "./CustomerOrgDisableResponse";
import { CustomerOrgDisableResponseAttributes } from "./CustomerOrgDisableResponseAttributes";
import { CustomerOrgDisableResponseData } from "./CustomerOrgDisableResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CustomerOrgDisableResponseType: ["org_disable"],
    CustomerOrgDisableStatus: ["disabled", "pending_disable"],
    CustomerOrgDisableType: ["customer_org_disable"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CustomerOrgDisableRequest: CustomerOrgDisableRequest,
    CustomerOrgDisableRequestAttributes: CustomerOrgDisableRequestAttributes,
    CustomerOrgDisableRequestData: CustomerOrgDisableRequestData,
    CustomerOrgDisableResponse: CustomerOrgDisableResponse,
    CustomerOrgDisableResponseAttributes: CustomerOrgDisableResponseAttributes,
    CustomerOrgDisableResponseData: CustomerOrgDisableResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};