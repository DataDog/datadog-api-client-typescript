import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
    OpsgenieServiceRegionType: ["us", "eu", "custom"],
    OpsgenieServiceType: ["opsgenie-service"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
