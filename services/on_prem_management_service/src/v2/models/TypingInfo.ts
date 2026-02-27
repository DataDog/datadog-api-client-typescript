import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OnPremManagementServiceCreateEnrollmentRequest } from "./OnPremManagementServiceCreateEnrollmentRequest";
import { OnPremManagementServiceCreateEnrollmentResponse } from "./OnPremManagementServiceCreateEnrollmentResponse";
import { OnPremManagementServiceCreateEnrollmentResponseAttributes } from "./OnPremManagementServiceCreateEnrollmentResponseAttributes";
import { OnPremManagementServiceCreateEnrollmentResponseData } from "./OnPremManagementServiceCreateEnrollmentResponseData";
import { OnPremManagementServiceEnrollmentAttributes } from "./OnPremManagementServiceEnrollmentAttributes";
import { OnPremManagementServiceEnrollmentDataRequest } from "./OnPremManagementServiceEnrollmentDataRequest";
import { OnPremManagementServiceGetEnrollmentResponse } from "./OnPremManagementServiceGetEnrollmentResponse";
import { OnPremManagementServiceGetEnrollmentResponseAttributes } from "./OnPremManagementServiceGetEnrollmentResponseAttributes";
import { OnPremManagementServiceGetEnrollmentResponseData } from "./OnPremManagementServiceGetEnrollmentResponseData";
import { OnPremManagementServiceRegisterTokenAttributes } from "./OnPremManagementServiceRegisterTokenAttributes";
import { OnPremManagementServiceRegisterTokenDataRequest } from "./OnPremManagementServiceRegisterTokenDataRequest";
import { OnPremManagementServiceRegisterTokenRequest } from "./OnPremManagementServiceRegisterTokenRequest";
import { OnPremManagementServiceRegisterTokenResponse } from "./OnPremManagementServiceRegisterTokenResponse";
import { OnPremManagementServiceRegisterTokenResponseAttributes } from "./OnPremManagementServiceRegisterTokenResponseAttributes";
import { OnPremManagementServiceRegisterTokenResponseData } from "./OnPremManagementServiceRegisterTokenResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OnPremManagementServiceCreateEnrollmentResponseType: [
      "createEnrollmentResponse",
    ],
    OnPremManagementServiceEnrollmentAttributesRunnerModesItems: [
      "workflow_automation",
      "app_builder",
    ],
    OnPremManagementServiceEnrollmentType: ["enrollment"],
    OnPremManagementServiceGetEnrollmentResponseAttributesStatus: [
      "new",
      "success",
      "failed",
    ],
    OnPremManagementServiceGetEnrollmentResponseType: ["getEnrollmentResponse"],
    OnPremManagementServiceRegisterTokenResponseType: ["tokenDefinitions"],
    OnPremManagementServiceRegisterTokenType: ["registerTokenRequest"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OnPremManagementServiceCreateEnrollmentRequest:
      OnPremManagementServiceCreateEnrollmentRequest,
    OnPremManagementServiceCreateEnrollmentResponse:
      OnPremManagementServiceCreateEnrollmentResponse,
    OnPremManagementServiceCreateEnrollmentResponseAttributes:
      OnPremManagementServiceCreateEnrollmentResponseAttributes,
    OnPremManagementServiceCreateEnrollmentResponseData:
      OnPremManagementServiceCreateEnrollmentResponseData,
    OnPremManagementServiceEnrollmentAttributes:
      OnPremManagementServiceEnrollmentAttributes,
    OnPremManagementServiceEnrollmentDataRequest:
      OnPremManagementServiceEnrollmentDataRequest,
    OnPremManagementServiceGetEnrollmentResponse:
      OnPremManagementServiceGetEnrollmentResponse,
    OnPremManagementServiceGetEnrollmentResponseAttributes:
      OnPremManagementServiceGetEnrollmentResponseAttributes,
    OnPremManagementServiceGetEnrollmentResponseData:
      OnPremManagementServiceGetEnrollmentResponseData,
    OnPremManagementServiceRegisterTokenAttributes:
      OnPremManagementServiceRegisterTokenAttributes,
    OnPremManagementServiceRegisterTokenDataRequest:
      OnPremManagementServiceRegisterTokenDataRequest,
    OnPremManagementServiceRegisterTokenRequest:
      OnPremManagementServiceRegisterTokenRequest,
    OnPremManagementServiceRegisterTokenResponse:
      OnPremManagementServiceRegisterTokenResponse,
    OnPremManagementServiceRegisterTokenResponseAttributes:
      OnPremManagementServiceRegisterTokenResponseAttributes,
    OnPremManagementServiceRegisterTokenResponseData:
      OnPremManagementServiceRegisterTokenResponseData,
  },
};
