import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OpsgenieAccountCreateAttributes } from "./OpsgenieAccountCreateAttributes";
import { OpsgenieAccountCreateData } from "./OpsgenieAccountCreateData";
import { OpsgenieAccountCreateRequest } from "./OpsgenieAccountCreateRequest";
import { OpsgenieAccountResponse } from "./OpsgenieAccountResponse";
import { OpsgenieAccountResponseAttributes } from "./OpsgenieAccountResponseAttributes";
import { OpsgenieAccountResponseData } from "./OpsgenieAccountResponseData";
import { OpsgenieAccountUpdateAttributes } from "./OpsgenieAccountUpdateAttributes";
import { OpsgenieAccountUpdateData } from "./OpsgenieAccountUpdateData";
import { OpsgenieAccountUpdateRequest } from "./OpsgenieAccountUpdateRequest";
import { OpsgenieAccountsResponse } from "./OpsgenieAccountsResponse";
import { OpsgenieServiceCreateAttributes } from "./OpsgenieServiceCreateAttributes";
import { OpsgenieServiceCreateData } from "./OpsgenieServiceCreateData";
import { OpsgenieServiceCreateRequest } from "./OpsgenieServiceCreateRequest";
import { OpsgenieServiceResponse } from "./OpsgenieServiceResponse";
import { OpsgenieServiceResponseAttributes } from "./OpsgenieServiceResponseAttributes";
import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";
import { OpsgenieServiceUpdateAttributes } from "./OpsgenieServiceUpdateAttributes";
import { OpsgenieServiceUpdateData } from "./OpsgenieServiceUpdateData";
import { OpsgenieServiceUpdateRequest } from "./OpsgenieServiceUpdateRequest";
import { OpsgenieServicesResponse } from "./OpsgenieServicesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OpsgenieAccountType: ["opsgenie-account"],
    OpsgenieServiceRegionType: ["us", "eu", "custom"],
    OpsgenieServiceType: ["opsgenie-service"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OpsgenieAccountCreateAttributes: OpsgenieAccountCreateAttributes,
    OpsgenieAccountCreateData: OpsgenieAccountCreateData,
    OpsgenieAccountCreateRequest: OpsgenieAccountCreateRequest,
    OpsgenieAccountResponse: OpsgenieAccountResponse,
    OpsgenieAccountResponseAttributes: OpsgenieAccountResponseAttributes,
    OpsgenieAccountResponseData: OpsgenieAccountResponseData,
    OpsgenieAccountUpdateAttributes: OpsgenieAccountUpdateAttributes,
    OpsgenieAccountUpdateData: OpsgenieAccountUpdateData,
    OpsgenieAccountUpdateRequest: OpsgenieAccountUpdateRequest,
    OpsgenieAccountsResponse: OpsgenieAccountsResponse,
    OpsgenieServiceCreateAttributes: OpsgenieServiceCreateAttributes,
    OpsgenieServiceCreateData: OpsgenieServiceCreateData,
    OpsgenieServiceCreateRequest: OpsgenieServiceCreateRequest,
    OpsgenieServiceResponse: OpsgenieServiceResponse,
    OpsgenieServiceResponseAttributes: OpsgenieServiceResponseAttributes,
    OpsgenieServiceResponseData: OpsgenieServiceResponseData,
    OpsgenieServiceUpdateAttributes: OpsgenieServiceUpdateAttributes,
    OpsgenieServiceUpdateData: OpsgenieServiceUpdateData,
    OpsgenieServiceUpdateRequest: OpsgenieServiceUpdateRequest,
    OpsgenieServicesResponse: OpsgenieServicesResponse,
  },
};
